import React from "react";
import { StoryFn, Meta } from '@storybook/react'
import Paragraph, { ParagraphProps } from "./Paragraph"

export default {
 title: 'atoms/Paragraph',
 component: Paragraph,
 argTypes: {
  children: {
   control: "text",
   defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis placerat libero, sit amet rutrum massa semper eu. Aliquam scelerisque egestas nisl.`
  },
  theme: {
   control: { type: "select", options: ["default","blue", "red"] }
  },
  tags: ['autodocs'],
 }
} as Meta<typeof Paragraph>;

const Template: StoryFn<typeof Paragraph> = (args: ParagraphProps) => <Paragraph {...args} />;

export const Default = Template.bind({});
