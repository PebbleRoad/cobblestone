import { storiesOf } from "@storybook/vue";
import readme from "./ExampleAxiosFetching.md";

const withReadme = {
  notes: {
    markdown: readme,
  },
};

storiesOf("ExampleAxiosFetching", module)
  .add(
    "successful response",
    () => `
    <ExampleAxiosFetching
      request="https://reqres.in/api/users/4"
    />
    `,
    withReadme
  )
  .add(
    "delayed response",
    () => `
    <ExampleAxiosFetching
      request="https://reqres.in/api/users/4?delay=1"
    />
    `,
    withReadme
  )
  .add(
    "404",
    () => `
    <ExampleAxiosFetching
      request="/api/unknown/23"
    />
    `,
    withReadme
  )
  .add(
    "invalid url",
    () => `
    <ExampleAxiosFetching
      request="http://invalid.url"
    />
    `,
    withReadme
  );
