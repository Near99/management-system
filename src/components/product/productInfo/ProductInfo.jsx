import React from "react";
import { product } from "../../data/data";
import Content from "../../templates/Content";

export default function ProductInfo() {
  return <Content data={product} actionBar={false} />;
}
