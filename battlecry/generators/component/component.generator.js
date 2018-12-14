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
      file.saveAs(`src/components/${this.args.name}/`, this.args.name);
    });
  }
}
