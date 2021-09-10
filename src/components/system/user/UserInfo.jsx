import React from "react";
import { user } from "../../data/data";
import Content from "../../templates/Content";

export default function UserInfo() {
  return <Content data={user} actionBar={true} />;
}
