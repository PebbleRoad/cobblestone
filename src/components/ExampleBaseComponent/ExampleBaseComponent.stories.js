import { storiesOf } from "@storybook/vue";
import readme from "./ExampleBaseComponent.md";

const withReadme = {
  notes: {
    markdown: readme,
  },
};

storiesOf("ExampleBaseComponent", module)
  .add(
    "default",
    () => ({
      template: `
      <ExampleBaseComponent
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
  )
  .add(
    "custom label",
    () => ({
      template: `
      <ExampleBaseComponent
        label="What's your age?"
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
