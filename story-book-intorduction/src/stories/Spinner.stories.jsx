import React from "react";

import { Spinner } from "./Spinner";

export default {
  title: "Example/Spinner",
  compnent: Spinner,
};

const Template = (args) => <Spinner {...args}/>;

export const Basic = Template.bind({});

export const FastSpin = Template.bind({});
FastSpin.args = {
    fast: true
}