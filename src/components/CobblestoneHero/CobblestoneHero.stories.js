import { storiesOf } from '@storybook/vue';
import readme from './CobblestoneHero.md';

const withReadme = {
  notes: {
    markdown: readme,
  },
};

storiesOf('CobblestoneHero', module)
  .add('default props', () => '<CobblestoneHero />', withReadme)
  .add(
    'custom projectName',
    () => `
    <CobblestoneHero
      projectName="My Project"
    />
    `,
    withReadme
  );
