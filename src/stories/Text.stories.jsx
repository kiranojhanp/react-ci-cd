import React from "react";

import { Text } from "./Text";

export default {
	title: "Text Component",
	component: Text,
};

const Template = (args) => <Text {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: 'red'
}

export const Blue = Template.bind({});
Blue.args = {
	color: "purple",
};