import React from "react";
import { procurement } from "../../data/data";
import Content from "../../templates/Content";

export default function Procurement() {
  return <Content data={procurement} actionBar={true} />;
}
