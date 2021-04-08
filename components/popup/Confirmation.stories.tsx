import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PickConfirmation, PickConfirmationProps } from "./Confirmation";

export default {
  title: "Common/PickConfirmation",
  component: PickConfirmation,
} as Meta;

const Template: Story<PickConfirmationProps> = (args) => (
  <PickConfirmation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  userPick: "Dortmund",
};
