terraform {
  required_version = "1.4.6"
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
      version = "3.73.0"
    }
  }
}

provider "azurerm" {
  features {}
}

provider "shell" {
  interpreter        = ["/bin/bash", "-c"]
  enable_parallelism = false
}
