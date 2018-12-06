import { storiesOf } from "@storybook/vue";
import readme from "./ExampleLazyLoadedImg.md";

const withReadme = {
  notes: {
    markdown: readme,
  },
};

storiesOf("ExampleLazyLoadedImg", module).add(
  "default",
  () => `
    <ExampleLazyLoadedImg />
    `,
  withReadme
);
