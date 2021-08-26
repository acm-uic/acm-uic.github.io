# ACM@UIC Website and Systems Documentation

[![CI](https://github.com/acm-uic/acm-uic.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/acm-uic/acm-uic.github.io/actions/workflows/ci.yml)

## Getting Started

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Cloning

This repository uses git submodules to link to the [media repo](https://github.com/acm-uic/web-media.git).

To clone with the submodules use `--recurse-submodules` flag:

```console
git clone --recurse-submodules https://github.com/acm-uic/acm-uic.github.io.git
```

To initialize the submodule on a already cloned repo use the following command:

```console
git submodule update --init
```

Reference: [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
