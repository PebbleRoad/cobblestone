<div align="center" style="text-align: center;">

![Cobblestone logo](cobblestone-logo.png)

# Cobblestone

**Modern static site framework and generator**

[Getting started](#getting-started) · [Features](#features) · [Package scripts](#package-scripts) · [Project structure](#project-structure) · [Recipes](#recipes) · [FAQ](#faq)

---

</div>

## Getting started

Clone this repository and use it as a boilerplate. CLI utility for project scaffolding is a work-in-progress.

<!-- 1. Install **Cobblestone CLI**
    ```
    $ yarn global add @pebbleroad/cobblestone-cli
    ```
1. Create a new Cobblestone project
    ```
    $ cobblestone create my-project
    ``` -->

## Features

- 📦&ensp;[**Webpack**](https://webpack.js.org/) for dev server and production build
- 🖼&ensp;[**Vue.js**](https://vuejs.org) for routing, views, and components
- ⚡️&ensp;[**Prerenderer**](https://github.com/chrisvfritz/prerender-spa-plugin/) for static-site generation from a SPA
- 🎨&ensp;[**Sass**](https://sass-lang.com/), [**Scarab**](https://scarab.style), [**PostCSS**](https://github.com/postcss/postcss) for styling
- 🤖&ensp;[**Babel**](https://babeljs.io/), [**ES6+**](https://www.ecma-international.org/ecma-262/6.0/) for writing JavaScript
- 📖&ensp;[**Storybook**](https://storybook.js.org) for UI component development environment
- ✅&ensp;[**Jest**](https://jestjs.io/), [**Cypress**](https://cypress.io) and [**Backstop**](https://github.com/garris/BackstopJS) for testing
- 💄&ensp;[**Prettier**](https://prettier.io/) for opinionated code formatting
- 📂&ensp;Opinionated folder structure for separation of concerns
- 👻&ensp;Bring-your-own headless CMS

## Package scripts

| `$ yarn`           | Description                                                                                      |
| :----------------- | :----------------------------------------------------------------------------------------------- |
| `dev`              | Start the app development server: <br>[**`localhost:3000/`**](http://localhost:3000/)            |
| `fetch`            | Fetch data from the CMS and write to `src/data/`                                                 |
| `build`            | Generate the optimized production app build in `dist/`                                           |
| `serve`            | Serve the `dist/` folder locally: <br>[**`localhost:3333/`**](http://localhost:3333/)            |
| `analyze`          | Run and display an analysis of the Webpack app bundle size                                       |
| `storybook`        | Start the Storybook development server: <br>[**`localhost:4000/`**](http://localhost:4000/)      |
| `storybook:build`  | Export a static Storybook to `.storybook/dist`                                                   |
| `storybook:serve`  | Serve the `.storybook/dist/` folder locally: <br>[**`localhost:4444/`**](http://localhost:4444/) |
| `test`             | Run all Jest, Cypress and Backstop tests                                                         |
| `├─ test:jest`     | Run all Jest tests                                                                               |
| `├─ test:cypress`  | Ensure the dev server is running, then run all Cypress tests                                     |
| `└─ test:backstop` | Run all Backstop tests                                                                           |
| `cypress:open`     | Open the Cypress dashboard                                                                       |
| `cypress:run`      | Run all Cypress tests                                                                            |
| `backstop:report`  | Open the Backstop report GUI                                                                     |
| `backstop:approve` | Approve the current Backstop snapshots                                                           |
| `backstop:run-dev` | Run Backstop tests in the development (using Docker)                                             |
| `backstop:run-ci`  | Run Backstop tests in a CI environment                                                           |

## Project structure

### &ensp;`✨ src/`

**Project source files**

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

**Optimized production build**

The `dist/` folder is generated by the Webpack build system.

<details>
<summary><strong>View list of optimizations</strong></summary>
</details>

---

### `☑️ tests/`

**Test configuration**

The `tests/` folder contains configuration and supporting files for Jest, Cypress and Backstop.

<details>
<summary><strong>View <code>tests/</code> folder structure</strong></summary>
</details>

---

### `⚙️ webpack/`

**Webpack configuration**

The `webpack/` folder contains configuration files for Webpack. Configuration is split across different targets (build, production and analyze), with a base configuration file that is merged via [`webpack-merge`](https://github.com/survivejs/webpack-merge).

---

### `📖 .storybook/`

**Storybook configuration**

The `storybook/` folder contains Storybook configuration files and folders.

---

### `💼 lib/`

**Internal project utilities**

The `lib/` folder is meant for customized internal scripts and utilities that may be used on a per-project basis. (e.g. a project may require a custom parser for a specific data schema)

---

## Recipes

### Configuring app routes

Routes (i.e. URL's) for the app are defined in `src/app/routes.js`. Visit the [Vue router documentation](https://router.vuejs.org/) for more information.

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

CLI utility for component scaffolding is a work-in-progress.

### Writing component stories

Refer to the [Storybook documentation](https://storybook.js.org/basics/guide-vue/#write-your-stories) and example component story.

### Writing and running tests

Documentation for this section is a work-in-progress.

### Configuring Webpack

Documentation for this section is a work-in-progress.

## FAQ

- **Why can't I use my browser's Vue devtools extension in Storybook?**  
  This is a [known issue](https://github.com/storybooks/storybook/issues/1708). As a workaround, Cobblestone uses the `@vue/devtools` package, a standalone Electron version of the Vue devtools. Running `$ yarn storybook` will automatically launch the Vue devtools window. To relaunch the devtools window, run `$ yarn run vue-devtools`.
