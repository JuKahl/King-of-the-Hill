import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import UserInfoBox, { UserInfoProps } from "./UserInfoBox";

export default {
  title: "Common/UserInfoBox",
  component: UserInfoBox,
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<UserInfoProps> = (args) => <UserInfoBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  picture:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
  username: "Julian",
  pick: "Dortmund",
  pickLogo: "https://crests.football-data.org/4.svg",
  opponent: "Schalke",
  opponentLogo: "https://crests.football-data.org/6.svg",
};
