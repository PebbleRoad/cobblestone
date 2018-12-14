import { storiesOf } from "@storybook/vue";
import readme from "./__NaMe__.md";

const withReadme = {
  notes: {
    markdown: readme,
  },
};

storiesOf("__NaMe__", module).add(
  "default props",
  () => "<__NaMe__ />",
  withReadme
);
