locals {
  gh_repo = "acm-uic/acm-uic.github.io"
}

data "azurerm_resource_group" "typesense_resource_group" {
  name = var.typesense_rg
}

resource "azurerm_container_app" "typesense_container_app" {
  name                         = "typesense-container-app"
  container_app_environment_id = azurerm_container_app_environment.typesense_container_app_env.id
  resource_group_name          = data.azurerm_resource_group.typesense_resource_group.name
  revision_mode                = "Single"
  ingress {
    allow_insecure_connections = false
    external_enabled           = true
    target_port                = 8108
    transport                  = "auto"
    traffic_weight {
      percentage      = 100
      latest_revision = true
    }
  }
  secret {
    name  = "api-key"
    value = var.typesense_api_key
  }
  template {
    max_replicas    = 1
    min_replicas    = 1
    revision_suffix = "one"
    container {
      args    = []
      command = []
      cpu     = 1
      image   = "docker.io/typesense/typesense:0.24.0"
      memory  = "2Gi"
      name    = "typesense-acm-website"
      env {
        name  = "TYPESENSE_DATA_DIR"
        value = "/data"
      }
      env {
        name        = "TYPESENSE_API_KEY"
        secret_name = "api-key"
      }
      liveness_probe {
        initial_delay    = 10
        interval_seconds = 10
        path             = "/health"
        port             = 8108
        transport        = "HTTP"
      }
      readiness_probe {
        interval_seconds = 10
        path             = "/health"
        port             = 8108
        transport        = "HTTP"
      }
      volume_mounts {
        name = "typesense-volume"
        path = "/data"
      }
    }
    volume {
      name         = "typesense-volume"
      storage_name = azurerm_container_app_environment_storage.typesense_container_app_env_storage.name
      storage_type = "AzureFile"
    }
  }
}

resource "azurerm_container_app_environment" "typesense_container_app_env" {
  name                       = "typesense-container-app-env"
  location                   = data.azurerm_resource_group.typesense_resource_group.location
  resource_group_name        = data.azurerm_resource_group.typesense_resource_group.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.typesense_log_workspace.id
}

resource "azurerm_container_app_environment_storage" "typesense_container_app_env_storage" {
  name                         = "typesense-container-app-storage"
  access_mode                  = "ReadWrite"
  container_app_environment_id = azurerm_container_app_environment.typesense_container_app_env.id
  account_name                 = azurerm_storage_account.typesense_storage_account.name
  share_name                   = azurerm_storage_share.typesense_storage_share.name
  access_key                   = azurerm_storage_account.typesense_storage_account.primary_access_key
}

resource "azurerm_storage_account" "typesense_storage_account" {
  name                     = "typesensestorage"
  account_kind             = "FileStorage"
  account_replication_type = "LRS"
  account_tier             = "Premium"
  location                 = data.azurerm_resource_group.typesense_resource_group.location
  resource_group_name      = data.azurerm_resource_group.typesense_resource_group.name
}

resource "azurerm_storage_share" "typesense_storage_share" {
  name                 = "typesense-share"
  quota                = 100
  storage_account_name = azurerm_storage_account.typesense_storage_account.name
}

resource "azurerm_log_analytics_workspace" "typesense_log_workspace" {
  name                = "typesense-logs"
  sku                 = "PerGB2018"
  retention_in_days   = 30
  location            = data.azurerm_resource_group.typesense_resource_group.location
  resource_group_name = data.azurerm_resource_group.typesense_resource_group.name
}

resource "github_actions_secret" "typesense_search_only_api_key" {
  repository      = split("/", local.gh_repo)[1]
  secret_name     = "TYPESENSE_SEARCH_ONLY_API_KEY"
  plaintext_value = shell_sensitive_script.typesense_search_only_api_key.output["value"]
}

resource "github_actions_secret" "typesense_host" {
  repository      = split("/", local.gh_repo)[1]
  secret_name     = "TYPESENSE_HOST"
  plaintext_value = azurerm_container_app.typesense_container_app.ingress[0].fqdn
}

resource "shell_sensitive_script" "typesense_search_only_api_key" {
  triggers = {
    when_value_changed = azurerm_container_app.typesense_container_app.latest_revision_fqdn
    when_value_changed = azurerm_container_app.typesense_container_app.id
    when_value_changed = var.typesense_api_key
  }
  environment = {
    TYPESENSE_HOST  = azurerm_container_app.typesense_container_app.latest_revision_fqdn
    COLLECTION_NAME = var.typesense_collection_name
  }
  depends_on = [
    azurerm_container_app.typesense_container_app
  ]
  sensitive_environment = {
    TYPESENSE_API_KEY = var.typesense_api_key
  }
  lifecycle {
    replace_triggered_by = [
      azurerm_container_app.typesense_container_app
    ]
  }
  lifecycle_commands {
    create = <<-EOF
      until curl --silent "https://$TYPESENSE_HOST/health" | grep -q '"ok":true'; do sleep 5; done;
      curl --silent "https://$TYPESENSE_HOST/keys" \
        -X POST \
        -H "X-TYPESENSE-API-KEY: $TYPESENSE_API_KEY" \
        -H 'Content-Type: application/json' \
        -d "{\"description\":\"search-only-api-key-$COLLECTION_NAME\",\"actions\": [\"documents:search\"], \"collections\": [\"$COLLECTION_NAME\"]}" \
        | jq '{id, value}'
      EOF
    delete = <<-EOF
      IN=$(cat)
      ID=$(echo $IN | jq -r .id)
      until curl --silent "https://$TYPESENSE_HOST/health" | grep -q '"ok":true'; do sleep 5; done;
      curl --silent "https://$TYPESENSE_HOST/keys/$ID" \
        -X DELETE \
        -H "X-TYPESENSE-API-KEY: $TYPESENSE_API_KEY"
      EOF
  }
}
