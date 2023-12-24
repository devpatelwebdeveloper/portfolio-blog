import { StoryFn, Meta } from '@storybook/react';
import { Controls } from '@storybook/blocks';
import Text from './Text';

export default {
  title: 'Atom/Text',
  text: 'Text',
  size: {
    options: ['p1', 'p2'],
    control: { type: 'dropdown' },
  },
  component: Text,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<{ text: string,size:string }> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Lorem ipsum',
size:'p2'
};
