import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NavHeader, { NavHeaderProps } from "./Header";

export default {
  title: "Common/Header",
  component: NavHeader,
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<NavHeaderProps> = (args) => <NavHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Overview",
  picture:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
  subNavOne: "your leagues",
  subNavTwo: "create a league",
};

export const Secondary = Template.bind({});
Secondary.args = {};
