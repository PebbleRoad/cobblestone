import registerRequireContextHook from "babel-plugin-require-context-hook/register";

// Require context in Jest
registerRequireContextHook();

// Ignore storybook-addon-vue-info in Jest
jest.mock("storybook-addon-vue-info", () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));
