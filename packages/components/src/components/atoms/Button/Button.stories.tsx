import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from "./Button"

export default {
title: 'atoms/Button',
component: Button,
argTypes: {}
} as ComponentMeta<typeof Button>;

 const Template: ComponentStory<typeof Button> = (args: ButtonProps) =>
  <Button {...args} />;

  export const Default = Template.bind({});