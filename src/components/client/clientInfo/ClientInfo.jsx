import React from "react";
import { client } from "../../data/data";
import Content from "../../templates/Content";

export default function ClientInfo() {
  return <Content data={client} actionBar={true} />;
}
