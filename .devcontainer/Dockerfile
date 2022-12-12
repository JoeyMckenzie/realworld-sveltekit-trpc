ARG VARIANT=18-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Ensure that pnpm is installed as a our package manager when we start our container
RUN corepack enable

# Install playwright deps
RUN npx --yes playwright install && npx --yes playwright install-deps
