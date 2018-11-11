import Vue from 'vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { addDecorator, configure } from '@storybook/vue';
import { setDefaults } from 'storybook-addon-vue-info';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { checkA11y } from '@storybook/addon-a11y';
import { themes } from '@storybook/components';
import '@storybook/addon-console';

///
// Initialize Vue plugins
///
import '~App/plugins.js';

///
// Import styles
///
import '~Styles/style.scss';
import '~Styles/carapace.scss';
import './custom-styles.scss';

///
// Set global Storybook options
///
addDecorator(VueInfoAddon)
addDecorator(withNotes);
addDecorator(checkA11y);
addDecorator(
  withOptions({
    name: `Storybook`,
    url: '#',
    theme: themes.normal,
    addonPanelInRight: true,
  })
);

///
// Set default options for `storybook-addon-vue-info`
///
setDefaults({
  header: false,
  styles: {
    // Styles are applied in `./custom-styles.css`
  },
});

///
// Dynamically register all Vue components from `src/components/`
///
const requireComponent = require.context('~Components', true, /\.vue$/);
requireComponent.keys().forEach(filePath => {
  // Get component filename
  const fileName = `./${filePath.split('/').pop()}`;

  // Get component config
  const componentConfig = requireComponent(filePath);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

///
// Dynamically load all stories from `src/components/`
///
const requireStory = require.context('~Components', true, /stories\.js$/);

function loadStories() {
  requireStory.keys().forEach(requireStory);
}

configure(loadStories, module);
