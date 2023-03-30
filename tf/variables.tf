variable "typesense_api_key" {
  description = "Typesense API key"
  type        = string
  sensitive   = true
}

variable "typesense_collection_name" {
  description = "Typesense collection name"
  type        = string
  sensitive   = true
}

variable "typesense_rg" {
  description = "Azure resource group"
  type        = string
}

variable "github_token" {
  description = "GitHub token with secrets write permission"
  type        = string
  sensitive   = true
}
