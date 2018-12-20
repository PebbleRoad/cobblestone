<div align="center" style="text-align: center;">

![Cobblestone logo](cobblestone-logo.png)

# Cobblestone

**Modern static site generator**

[![Build Status](https://api.travis-ci.com/PebbleRoad/cobblestone.svg?branch=master)](https://travis-ci.com/PebbleRoad/cobblestone)

[Getting started](#getting-started) · [Package scripts](#package-scripts) · [Project structure](#project-structure) · [Recipes](#recipes) · [FAQ](#faq)

---

</div>

## What is Cobblestone?

Cobblestone is a collection of files, folders and configuration which developers can use as a starting point to **create highly performant, well-tested and maintainable static websites** with ease.

## What's included?

- 📦&ensp;[**Webpack**](https://webpack.js.org/) for dev server and production build
- 🖼&ensp;[**Vue.js**](https://vuejs.org) for routing, views, and components
- ⚡️&ensp;[**Prerenderer**](https://github.com/chrisvfritz/prerender-spa-plugin/) for static-site generation from a SPA
- 🎨&ensp;[**Sass**](https://sass-lang.com/), [**Scarab**](https://scarab.style), [**PostCSS**](https://github.com/postcss/postcss) for styling
- 😴&ensp;[**lazysizes**](https://github.com/aFarkas/lazysizes) for lazy-loaded, responsive images
- 🤖&ensp;[**Babel**](https://babeljs.io/), [**ES6+**](https://www.ecma-international.org/ecma-262/6.0/) for writing JavaScript
- 📖&ensp;[**Storybook**](https://storybook.js.org) for UI component development environment
- ✅&ensp;[**Jest**](https://jestjs.io/) + [**Cypress**](https://cypress.io) for automated testing
- ✋🏼&ensp;[**BackstopJS**](https://github.com/garris/BackstopJS) for visual regression testing
- 🕶&ensp;[**cypress-axe**]() for A11y validation
- 💄&ensp;[**Prettier**](https://prettier.io/) for opinionated code formatting
- 🥁&ensp;[**Battlecry**](https://github.com/pedsmoreira/battlecry) for scaffolding files
- 📂&ensp;Opinionated folder structure for separation of concerns
- 👻&ensp;Bring-your-own headless CMS

## Getting started

**Clone this repository and use it as a boilerplate:**

```
$ git clone git@github.com:PebbleRoad/cobblestone.git my-project
```

**Make sure you have these installed:**

- [Node.js](https://nodejs.org/en/) + [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/) + [BackstopJS Docker image](https://hub.docker.com/r/backstopjs/backstopjs/)

<!-- _CLI utility for project scaffolding is a work-in-progress._ -->

<!-- 1. Install **Cobblestone CLI**
    ```
    $ yarn global add @pebbleroad/cobblestone-cli
    ```
1. Create a new Cobblestone project
    ```
    $ cobblestone create my-project
    ``` -->

**To start developing:**

```
$ cd my project
$ yarn dev # start the development server
```

## Package scripts

These scripts can be executed by running `yarn SCRIPT_NAME`:

| Script name        | Description                                                  | Notes                                                                |
| :----------------- | :----------------------------------------------------------- | :------------------------------------------------------------------- |
| **Development**    |
| `dev`              | Start the app development server                             | [**`localhost:3000/`**](http://localhost:3000/)                      |
| `component <name>` | Scaffold a new Vue component                                 | Always use PascalCased component names                               |
| `fetch`            | Fetch data from the CMS and write to `src/data/`             | You'll need to customize `lib/scripts/fetch-from-cms.js`             |
| `build`            | Build the app for production                                 | Generated in `dist/`                                                 |
| `serve`            | Serve the production build locally                           | [**`localhost:3333/`**](http://localhost:3333/)                      |
| `lighthouse`       | Run Google Lighthouse performance tests                      | You must first serve the production build at `http://localhost:3333` |
| `analyze`          | Run and display an analysis of the Webpack app bundle size   | [**`localhost:8888/`**](http://localhost:8888/)                      |
| **Storybook**      |
| `storybook`        | Start the Storybook development server and open Vue devtools | [**`localhost:4000/`**](http://localhost:4000/)                      |
| `storybook:ci`     | Start the Storybook development server with the `--ci` flag  | [**`localhost:4000/`**](http://localhost:4000/)                      |
| `storybook:build`  | Generate and export a static build of                        | Generated in `.storybook/dist/`                                      |
| `storybook:serve`  | Serve the `.storybook/dist/` folder locally                  | [**`localhost:4444/`**](http://localhost:4444/)                      |
| **Testing**        |
| `test`             | Run all Jest, Cypress and Backstop tests                     |                                                                      |
| `├─ test:jest`     | Run all Jest tests                                           |                                                                      |
| `├─ test:cypress`  | Ensure the dev server is running, then run all Cypress tests |                                                                      |
| `└─ test:backstop` | Run all Backstop tests                                       |                                                                      |
| **Cypress**        |                                                              |                                                                      |
| `cypress:open`     | Open the Cypress dashboard                                   |                                                                      |
| `cypress:app`      | Run Cypress e2e tests                                        |                                                                      |
| `cypress:app`      | Run Cypress component tests                                  |                                                                      |
| **BackstopJS**     |                                                              |                                                                      |
| `backstop:run`     | Run Backstop tests (using Docker)                            |                                                                      |
| `backstop:report`  | Open the Backstop report GUI                                 |                                                                      |
| `backstop:approve` | Approve the current Backstop snapshots                       |                                                                      |

## Project structure

### &ensp;`✨ src/`

#### Project source files

The `src/` folder contains the project source files. These files are processed by Webpack's dev server or build system (depending on the current `NODE_ENV`). Only the production build contains optimized assets.

<details>
<summary><strong>View <code>src/</code> folder structure</strong></summary>

|     | File / Folder           | Description                              |
| :-- | :---------------------- | :--------------------------------------- |
| 📁  | `src/`                  | Project source files                     |
| 📁  | `├── app/`              | App files                                |
| 📄  | `│ ├── App.vue`         | Root App component                       |
| 📄  | `│ ├── index.js`        | Application entry point                  |
| 📄  | `│ ├── plugins.js`      | Vue plugin configuration                 |
| 📄  | `│ └── router.js`       | Vue router configuration                 |
| 📁  | `├── components/`       | Vue components                           |
| 📁  | `├── assets/`           | Static asset files                       |
| 📄  | `│ ├── favicon.png`     | Site favicon file                        |
| 📁  | `│ ├── fonts/`          | Webfont files                            |
| 📁  | `│ └── images/`         | Image files                              |
| 📁  | `├── data/`             | JSON data files                          |
| 📁  | `├── html/`             | HTML templates for `html-webpack-plugin` |
| 📁  | `├── public/`           | Static public assets                     |
| 📄  | `│ └── index.html`      | Main `index.html` file for SPA           |
| 📁  | `├── scripts/`          | Global scripts                           |
| 📁  | `├── styles/`           | Sass stylesheets                         |
| 📁  | `‌‌│ ├── config/`       | Stylesheet configuration                 |
| 📁  | `‌‌│ ├── tokens/`       | Design token configuration               |
| 📁  | `‌‌│ ├── typography/`   | Global typography styles                 |
| 📄  | `‌‌│ ├── base.scss`     | Global base styles                       |
| 📄  | `‌‌│ ├── carapace.scss` | Carapace entry point                     |
| 📄  | `‌‌│ ├── reset.scss`    | CSS reset/normalize styles               |
| 📄  | `‌‌│ └── style.scss`    | Main stylesheet entry point              |
| 📁  | `└── views/`            | App views                                |

</details>

---

### `🎁 dist/`

#### Optimized production build

The production build is generated in the `dist/` folder by the Webpack build system.

#### List of optimizations

- Compresses images with a focus on performance
- Minifies scripts, styles, and other static assets
- Provides code splitting with Webpack dynamic imports
- Includes an offline Service Worker, so the app works offline
- Generates favicons and a PWA-compatible `manifest.json` file
- Polyfills JavaScript and CSS for browser support down to IE10

---

### `☑️ tests/`

#### Test configuration

The `tests/` folder contains configuration and supporting files for Jest, Cypress and Backstop.

<!-- <details>
<summary><strong>View <code>tests/</code> folder structure</strong></summary>
</details> -->

---

### `⚙️ webpack/`

#### Webpack configuration

The `webpack/` folder contains configuration files for Webpack. Configuration is split across different targets (build, production and analyze), with a base configuration file that is merged via [`webpack-merge`](https://github.com/survivejs/webpack-merge).

#### Default Webpack entry points

| Name                    | Path                                 | Description                                                            |
| :---------------------- | :----------------------------------- | :--------------------------------------------------------------------- |
| **babelPolyfill**       | `node_modules/@babel/polyfill`       | For ES2015+ support in IE10+                                           |
| **customEventPolyfill** | `node_modules/custom-event-polyfill` | Polyfill for `window.CustomEvent`                                      |
| **lazysizes**           | `node_modules/lazysizes`             | Library for lazy-loaded, responsive images                             |
| **carapace**            | `src/styles/carapace.scss`           | CSS utility classes                                                    |
| **app**                 | `src/app/index.js`                   | Application source code                                                |
| **scripts**             | `src/scripts/index.js`               | Entry point for global scripts<br>_(has to be loaded after lazysizes)_ |

#### Webpack resolve aliases

These [Webpack resolve aliases](https://webpack.js.org/configuration/resolve/#resolve-alias) are registered by default, so you can go easy on dot-dot-slashes.

| Alias             | Path             |
| :---------------- | :--------------- |
| **`~App`**        | `src/app`        |
| **`~Views`**      | `src/views`      |
| **`~Components`** | `src/components` |
| **`~Styles`**     | `src/styles`     |
| **`~Scripts`**    | `src/scripts`    |
| **`~Data`**       | `src/data`       |
| **`~Assets`**     | `src/assets`     |

---

### `📖 .storybook/`

**Storybook configuration**

The `storybook/` folder contains files for [Storybook configuration](https://storybook.js.org/configurations/custom-webpack-config/).

---

### `💼 lib/`

**Internal project utilities**

The `lib/` folder is meant for customized internal scripts and utilities that may be used on a per-project basis. (e.g. a project may require a custom parser for a specific data schema)

## Recipes

### Managing design tokens

Design tokens are defined in `src/styles/tokens/`.

Cobblestone's Webpack configuration makes it possible to use Scarab's design tokens and helper functions anywhere in the `src/styles/` folder and also in Vue SFC files.

---

### Creating new components

To create a new component called `ComponentName`, create the following files:

- `src/components/ComponentName/ComponentName.md`
- `src/components/ComponentName/ComponentName.stories.js`
- `src/components/ComponentName/ComponentName.vue`

And for component tests,

- **With Cypress**: <br>
  `tests/cypress/integration/components/ComponentName.spec.js`
- **With Jest**: <br>
  `src/components/ComponentName/ComponentName.spec.js`

<!-- _CLI utility for component scaffolding is a work-in-progress._ -->

---

### Creating router views

Views are defined as Vue components in the `src/views/` folder.

---

### Configuring app routes

We use `vue-router` for routing. The router is configured in `src/app/router.js`. This file maps routes (i.e. URLs) to router views.

Visit the [Vue router documentation](https://router.vuejs.org/) for more information on configuring `vue-router`.

---

### Writing component stories

Component stories serve as content for Storybook. They live in the same folder as the component's Vue file.

- Stories are located in the `src/components/ComponentName/` folder

Refer to the [Storybook documentation](https://storybook.js.org/basics/guide-vue/#write-your-stories) for how to write stories.

---

### Writing and running tests

#### Component unit and integration tests

Component unit and integration tests can be run by either Cypress or Jest.

- **With Cypress**: <br>
  `tests/cypress/integration/components/ComponentName/ComponentName.spec.js`

- **With Jest**: <br>
  `src/components/ComponentName/ComponentName.spec.js`

#### App integration and E2E tests

We use Cypress for app integration and E2E tests.

- Cypress test specs are located in the `tests/cypress/integration/app/` folder

#### Accessibility validation

We use [`cypress-axe`](https://github.com/avanslaars/cypress-axe) for a11y validation. Use the provided `cy.injectAxe()` and `cy.checkA11y()` Cypress commands to test accessibility within components or at the application level.

#### Visual regression testing

We use BackstopJS for visual regression testing.

- Backstop test scenarios are defined in `tests/backstop/scenarios.js`
- Backstop configuration is defined in `./backstop.config.js`

---

### Configuring Webpack

Webpack configuration is located in the `webpack/` folder. Cobblestone uses a merge strategy to handle Webpack configuration. The following configuration files are present by default:

- `base.config.js` — Base Webpack configuration
- `dev.config.js` — Configuration for development server
- `prod.config.js` — Configuration for production build
- `analyze.config.js` — Configuration for `webpack-bundle-analyzer`

---

### Scaffolding

#### Scaffold a component

You can scaffold a component with command below:

```bash
# With npm
$ npm run component --cobblestone:scaffold_component=Button

# With yarn
$ yarn component Button
```

## FAQ

- **Why can't I use my browser's Vue devtools extension in Storybook?**  
  This is a [known issue](https://github.com/storybooks/storybook/issues/1708). As a workaround, Cobblestone uses the `@vue/devtools` package, a standalone Electron version of the Vue devtools. Running `$ yarn storybook` will automatically launch the Vue devtools window. To relaunch the devtools window, run `$ yarn run vue-devtools`.
