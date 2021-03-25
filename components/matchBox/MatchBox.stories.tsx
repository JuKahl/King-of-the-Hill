import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MatchBox, { MatchBoxProps } from "./MatchBox";

export default {
  title: "Common/MatchBox",
  component: MatchBox,
} as Meta;

const Template: Story<MatchBoxProps> = (args) => <MatchBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // awayteamLogo: "https://crests.football-data.org/4.svg",
  awayTeam: "Dortmund",
  // hometeamLogo: "https://crests.football-data.org/1.svg",
  homeTeam: "Köln",
};
