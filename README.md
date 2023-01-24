# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

## Local Development

### Install

```
$ npm install
```

### Run

```
$ npm start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

## Deployment & Hosting

This site is hosted on GitHub pages.

### CI/CD

GitHub Actions is used for CI/CD.

The `validate` workflow runs on every push and pull request and ensures the site
builds successfully.

The `deploy-prod` workflow runs on every push to the `master` branch and
deploys the site to GitHub pages (`gh-pages` branch).
