import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import YourLeagues, { YourPickProps } from "./YourLeagues";

export default {
  title: "Common/YourLeagues",
  component: YourLeagues,
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<YourPickProps> = (args) => <YourLeagues {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pick: "Borussia Dortmund",
  opponent: "VfL Wolfsburg",
};
