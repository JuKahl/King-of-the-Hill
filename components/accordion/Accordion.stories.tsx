import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Accordion, { Content } from "./Accordion";

export default {
  title: "Common/Accordion",
  component: Accordion,
} as Meta;

const Template: Story<Content> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Overview",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur at saepe tempora magnam explicabo, inventore maxime architecto quis alias incidunt libero aliquam dolor rerum recusandae ipsum. Accusamus, aut eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea expedita nihil deserunt beatae necessitatibus minima obcaecati, libero blanditiis officia corporis, voluptatum explicabo. Autem corporis, voluptas quo quod vel ex!",
};
