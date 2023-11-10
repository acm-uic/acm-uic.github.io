FROM mcr.microsoft.com/devcontainers/typescript-node

# setup azure cli
RUN apt-get update && \
apt-get install -y ca-certificates curl apt-transport-https lsb-release gnupg && \
mkdir -p /etc/apt/keyrings && \
curl -sLS https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | tee /etc/apt/keyrings/microsoft.gpg > /dev/null && \
chmod go+r /etc/apt/keyrings/microsoft.gpg && \
bash -c 'echo "deb [arch=`dpkg --print-architecture` signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/azure-cli/ $(lsb_release -cs) main"' | tee /etc/apt/sources.list.d/azure-cli.list && \
apt-get update && \
apt-get install -y azure-cli

USER node

# setup terraform
ARG TERRAFORM_VERSION=1.6.3
RUN git clone --depth=1 https://github.com/tfutils/tfenv.git $HOME/.tfenv && \
mkdir -p $HOME/.local/bin/ && \
ln -s $HOME/.tfenv/bin/* $HOME/.local/bin && \
$HOME/.local/bin/tfenv install $TERRAFORM_VERSION && \
$HOME/.local/bin/tfenv use $TERRAFORM_VERSION
