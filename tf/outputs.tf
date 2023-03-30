output "typesense_container_app_fqdn" {
  value = azurerm_container_app.typesense_container_app.ingress[0].fqdn
}

output "typesense_search_only_api_key" {
  value     = shell_sensitive_script.typesense_search_only_api_key.output["value"]
  sensitive = true
}
