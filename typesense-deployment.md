# Typesense deployment

## Setup GitHub Deployment Environment

- Create a new [GitHub Deployment Environment](https://docs.github.com/en/actions/reference/environments) named `azure-container-app`

## Setup Azure resources

We need `typesense-rg` resource group with 2 federated identity credentials:

- `typesense-ci` - with read-only access to the `typesense-rg` resource group
- `typesense-deploy` - with read-write access to the `typesense-rg` resource group

```bash
$subscriptionId = "..."
$tenantId = "..."
$resourceGroupName = "typesense-rg"
$resourceGroupLocation = "northcentralus"

# Create resource group

az group create --name $resourceGroupName --location $resourceGroupLocation


# Create AAD apps and federated identity credentials

## read-write for deployment
az ad app create --display-name typesense-deploy # extract $appId
az ad sp create --id $appId # extract $assigneeObjectId
az role assignment create --role contributor --subscription $subscriptionId --assignee-object-id  $assigneeObjectId --assignee-principal-type ServicePrincipal --scope /subscriptions/$subscriptionId/resourceGroups/$resourceGroupName
az rest --method POST --uri 'https://graph.microsoft.com/beta/applications/<APPLICATION-OBJECT-ID>/federatedIdentityCredentials' --body '{"name":"typesense-deploy","issuer":"https://token.actions.githubusercontent.com","subject":"repo:acm-uic/acm-uic.github.io:environment:azure-container-app","description":"Typesense deploy","audiences":["api://AzureADTokenExchange"]}'
```

## Setup GitHub Secrets

```bash
gh --repo acm-uic/acm-uic.github.io secret set AZURE_CLIENT_ID --body $readOnlyClientId
```
