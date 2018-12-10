<div align="center" style="text-align: center;">

![Cobblestone logo](cobblestone-logo.png)

# Cobblestone

**Modern static site generator**

[Getting started](#getting-started) · [Features](#features) · [Package scripts](#package-scripts) · [Project structure](#project-structure) · [Recipes](#recipes) · [FAQ](#faq)

---

</div>

## What is Cobblestone?

Cobblestone is a collection of files, folders and configuration which developers can use as a starting point to **create highly performant, well-tested and easily maintainable static websites** with ease.

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
- 📂&ensp;Opinionated folder structure for separation of concerns
- 👻&ensp;Bring-your-own headless CMS

## Getting started

**Clone this repository and use it as a boilerplate:**

```
$ git clone git@github.com:PebbleRoad/cobblestone.git my-project
```

Make sure you have these installed:

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

## Package scripts

These scripts can be executed by running `yarn SCRIPT_NAME`:

| Script name        | Description                                                  | Notes                                                    |
| :----------------- | :----------------------------------------------------------- | :------------------------------------------------------- |
| `dev`              | Start the app development server                             | [**`localhost:3000/`**](http://localhost:3000/)          |
| `fetch`            | Fetch data from the CMS and write to `src/data/`             | You'll need to customize `lib/scripts/fetch-from-cms.js` |
| `build`            | Build the app for production                                 | Generated in `dist/`                                     |
| `serve`            | Serve the production build locally                           | [**`localhost:3333/`**](http://localhost:3333/)          |
| `analyze`          | Run and display an analysis of the Webpack app bundle size   | [**`localhost:8888/`**](http://localhost:8888/)          |
| `storybook`        | Start the Storybook development server                       | [**`localhost:4000/`**](http://localhost:4000/)          |
| `storybook:build`  | Generate and export a static build of                        | Generated in `.storybook/dist/`                          |
| `storybook:serve`  | Serve the `.storybook/dist/` folder locally                  | [**`localhost:4444/`**](http://localhost:4444/)          |
| `test`             | Run all Jest, Cypress and Backstop tests                     |                                                          |
| `├─ test:jest`     | Run all Jest tests                                           |                                                          |
| `├─ test:cypress`  | Ensure the dev server is running, then run all Cypress tests |                                                          |
| `└─ test:backstop` | Run all Backstop tests                                       |                                                          |
| `cypress:open`     | Open the Cypress dashboard                                   |                                                          |
| `cypress:app`      | Run Cypress e2e tests                                        |                                                          |
| `cypress:app`      | Run Cypress component tests                                  |                                                          |
| `backstop:report`  | Open the Backstop report GUI                                 |                                                          |
| `backstop:approve` | Approve the current Backstop snapshots                       |                                                          |
| `backstop:run-dev` | Run Backstop tests in the development (using Docker)         |                                                          |
| `backstop:run-ci`  | Run Backstop tests in a CI environment                       |                                                          |

## Project structure

### &ensp;`✨ src/`

#### Project source files

The `src/` folder contains the project source files. These files are processed by Webpack's dev server or build system (depending on the current `NODE_ENV`). Only the production build contains optimized assets.

<details>
<summary><strong>View <code>src/</code> folder structure</strong></summary>

|     | File / Folder          | Description                    |
| :-- | :--------------------- | :----------------------------- |
| 📁  | `src/`                 | Project source files           |
| 📁  | `├── app/`             | App files                      |
| 📄  | `│ ├── App.vue`        | Root App component             |
| 📄  | `│ ├── index.js`       | Application entry point        |
| 📄  | `│ ├── plugins.js`     | Vue plugin configuration       |
| 📄  | `│ ├── routes.js`      | App route configuration        |
| 📁  | `│ └── views/`         | App views                      |
| 📁  | `├── components/`      | Vue components                 |
| 📁  | `├── assets/`          | Static asset files             |
| 📄  | `│ ├── favicon.png`    | Site favicon file              |
| 📁  | `│ ├── fonts/`         | Webfont files                  |
| 📁  | `│ └── images/`        | Image files                    |
| 📁  | `├── data/`            | JSON data files                |
| 📁  | `├── public/`          | Static public assets           |
| 📄  | `│ └── index.html`     | Main `index.html` file for SPA |
| 📁  | `├── scripts/`         | Global scripts                 |
| 📁  | `└── styles/`          | Sass stylesheets               |
| 📁  | `‌‌ ├── config/`       | Stylesheet configuration       |
| 📁  | `‌‌ ├── tokens/`       | Design token configuration     |
| 📁  | `‌‌ ├── typography/`   | Global typography styles       |
| 📄  | `‌‌ ├── base.scss`     | Global base styles             |
| 📄  | `‌‌ ├── carapace.scss` | Carapace entry point           |
| 📄  | `‌‌ ├── reset.scss`    | CSS reset/normalize styles     |
| 📄  | `‌‌ └── style.scss`    | Main stylesheet entry point    |

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

| Name          | Path                       | Description                                                        |
| :------------ | :------------------------- | :----------------------------------------------------------------- |
| **app**       | `src/app/index.js`         | Application code                                                   |
| **carapace**  | `src/styles/carapace.scss` | Carapace styles                                                    |
| **lazysizes** | `node_modules/lazysizes`   | lazysizes library                                                  |
| **scripts**   | `src/scripts/index.js`     | Global scripts entry point<br>_(has to be loaded after lazysizes)_ |

#### Webpack resolve aliases

These [Webpack resolve aliases](https://webpack.js.org/configuration/resolve/#resolve-alias) are registered by default, so you can go easy on dot-dot-slashes.

| Alias             | Path             |
| :---------------- | :--------------- |
| **`~App`**        | `src/app`        |
| **`~Data`**       | `src/data`       |
| **`~Styles`**     | `src/styles`     |
| **`~Scripts`**    | `src/scripts`    |
| **`~Assets`**     | `src/assets`     |
| **`~Components`** | `src/components` |
| **`~Views`**      | `src/app/views`  |

---

### `📖 .storybook/`

**Storybook configuration**

The `storybook/` folder contains files for [Storybook configuration](https://storybook.js.org/configurations/custom-webpack-config/).

---

### `💼 lib/`

**Internal project utilities**

The `lib/` folder is meant for customized internal scripts and utilities that may be used on a per-project basis. (e.g. a project may require a custom parser for a specific data schema)

---

## Recipes

### Configuring app routes

Routes (i.e. URLs) for the app are defined in `src/app/routes.js`. Visit the [Vue router documentation](https://router.vuejs.org/) for more information.

### Creating router views

Vue components in `src/app/views/` serve as router views.

### Managing design tokens

Design tokens are defined in `src/styles/tokens/`.

Cobblestone's Webpack configuration makes it possible to use Scarab's design tokens and helper functions anywhere in the `src/styles/` folder and also in Vue SFC files.

### Creating new components

To create a new component called `ComponentName`, create the following files:

- `src/components/ComponentName/ComponentName.md`
- `src/components/ComponentName/ComponentName.stories.js`
- `src/components/ComponentName/ComponentName.test.js`
- `src/components/ComponentName/ComponentName.vue`

_CLI utility for component scaffolding is a work-in-progress._

### Writing component stories

Refer to the [Storybook documentation](https://storybook.js.org/basics/guide-vue/#write-your-stories) and example component story.

### Writing and running tests

#### Component unit tests

Component unit tests are located inside the component folder, and exist as a `ComponentName.test.js` file.

#### Integration/E2E tests

Integration/E2E tests are located in the `tests/cypress/integration/` folder.

#### Visual regression testing

Backstop test scenarios are defined in `tests/backstop/scenarios.js`. Backstop configuration is defined in `backstop.config.js`.

### Configuring Webpack

Webpack configuration is located in the `webpack/` folder. Cobblestone uses a merge strategy to handle Webpack configuration. The following configuration files are present by default:

- `base.config.js` — Base Webpack configuration
- `dev.config.js` — Configuration for development server
- `prod.config.js` — Configuration for production build
- `analyze.config.js` — Configuration for `webpack-bundle-analyzer`

## FAQ

- **Why can't I use my browser's Vue devtools extension in Storybook?**  
  This is a [known issue](https://github.com/storybooks/storybook/issues/1708). As a workaround, Cobblestone uses the `@vue/devtools` package, a standalone Electron version of the Vue devtools. Running `$ yarn storybook` will automatically launch the Vue devtools window. To relaunch the devtools window, run `$ yarn run vue-devtools`.
