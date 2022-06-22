import React from "react";
import MapElement from "./Map";

export default {
  title: "MapElement",
  component: MapElement
};

const template = args => <MapElement {...args} />;

export const Default = template.bind({});
Default.args = {
  zoom: 8
};