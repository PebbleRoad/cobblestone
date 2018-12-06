import { storiesOf } from "@storybook/vue";
import readme from "./ExampleContainerComponent.md";

const withReadme = {
  notes: {
    markdown: readme,
  },
};

storiesOf("ExampleContainerComponent", module).add(
  "default",
  () => ({
    template: `
      <ExampleContainerComponent
        v-model="inputValue"
      />
      `,
    data() {
      return {
        inputValue: "",
      };
    },
  }),
  withReadme
);
