import { Generator } from "battlecry";

export default class ComponentGenerator extends Generator {
  config = {
    generate: {
      args: "name",
      options: {
        special: { description: "Special option" },
      },
    },
  };

  generate() {
    this.templates().forEach(file => {
      if (file.path.includes(".spec.js")) {
        file.saveAs(`tests/cypress/integration/components/`, this.args.name);
      } else {
        file.saveAs(`src/components/${this.args.name}/`, this.args.name);
      }
    });
  }
}
