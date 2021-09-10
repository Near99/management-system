import React from "react";
import { inventory } from "../../data/data";
import Content from "../../templates/Content";

export default function InventoryInfo() {
  return <Content data={inventory} actionBar={false} />;
}
