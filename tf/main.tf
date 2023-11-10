terraform {
  required_version = "1.6.3"
  backend "azurerm" {
    resource_group_name  = "acm-hybridcloud"
    storage_account_name = "acmhybridstore"
    container_name       = "acm-terraform-state"
    key                  = "typesense.tfstate"
    snapshot             = true
  }
  required_providers {
    shell = {
      source  = "scottwinkler/shell"
      version = "1.7.10"
    }
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.79.0"
    }
    azapi = {
      source = "Azure/azapi"
      version = "1.10.0"
    }
  }
}

provider "azurerm" {
  features {}
  skip_provider_registration = "true"
}

provider "shell" {
  interpreter        = ["/bin/bash", "-c"]
  enable_parallelism = false
}

provider "azapi" {
  # Configuration options
}
