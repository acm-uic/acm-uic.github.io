# Contributing to acm-uic.github.io

## What should I know?

### Folder structure

| name           | explanation                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| blog           | contains blog posts & announcements that show up under `/blog` route .                              |
| docs           | contains docs & wiki pages that show up under `/docs` route .                                       |
| SIGs           | contains pages with details about Special Interest Groups (SIGs) that show up under `/sigs` route . |
| src            | contains source code for the web site, reusable components, stylesheets, etc.                       |
| src/components | contains reusable components for site pages, blog posts, docs, and other pages.                     |
| src/pages      | contains site pages such as `/join` `/about/`.                                                      |
| static         | contains static content such as images.                                                             |

### Markdown and `mdx`

Site pages can be written in JavaScript (`.js`, `.jsx`), TypeScript (`.ts`, `.tsx`), and Markdown (`.md`, `.mdx`).

MDX allows the use of JSX inside Markdown files, which allows us to import and use React components in posts, and pages, without writing a lot of js/ts boilerplate code.

### Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```console
pnpm install
```

### Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## How can I Contribute?

### Reporting bugs

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/).

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. When listing steps, **don't just say what you did, but explain how you did it**.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

Include details about your configuration and environment:

- What's the name and version of the Browser you're using
- What's the name and version of the OS you're using?

### Pull Requests

- Maintain code quality.
- Make sure linters are happy.
- Make sure the status checks are passing.
- Follow instructions in the pull request template.
- We try to squash and merge PRs when we can.
- Consider starting the PR title and commits with an applicable emoji:
  - 🌟 `:sparkles:` when adding an enhancement.
  - 🐛 `:bug:` when fixing a bug.
  - 📝 `:memo:` when writing docs, blog posts, etc.
  - 🔥 `:fire:` when removing code.
  - 💚 `:green_heart:` when fixing CI builds.
  - ⬆️ `:arrow_up:` when upgrading dependencies.
  - ⬇️ `:arrow_down:` when downgrading dependencies.

### PR and Issue labels

The labeler action should add some base labels to a pull request. Consider adding appropriate labels to pull requests and issues.
