import React from "react";
import { order } from "../../data/data";
import Content from "../../templates/Content";

export default function OrderInfo() {
  return <Content data={order} actionBar={true} />;
}
