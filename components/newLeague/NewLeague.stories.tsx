import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CreateLeague from "./CreateLeague";

export default {
  title: "Common/CreateLeague",
  component: CreateLeague,
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story = () => <CreateLeague />;

export const Primary = Template.bind({});
