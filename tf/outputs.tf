output "typesense_container_app_fqdn" {
  value = azurerm_dns_cname_record.typesense.fqdn
}

# output "typesense_search_only_api_key" {
#   value = shell_script.typesense_search_only_api_key.output["value"]
# }
