import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Atom/Text',
  text: 'Text',
  component: Text,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<{ text: string }> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Lorem ipsum',
};
