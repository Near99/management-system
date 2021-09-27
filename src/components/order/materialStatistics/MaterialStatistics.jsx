import React, { useState } from "react";
import { Button, Table, Tabs, Descriptions } from "antd";
import { Link } from "react-router-dom";

const NavTabs = () => {
  const { TabPane } = Tabs;
  const toHome = (
    <Link to="/" style={{ color: "#000000" }}>
      首页
    </Link>
  );
  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab={toHome} key="1" />
      <TabPane tab="订单信息" key="2" />
    </Tabs>
  );
};

function MaterialStatistics() {
  const [toggleChangeInventory, setToggleChangeInventory] = useState(false);
  return (
    <div>
      <NavTabs />
    </div>
  );
}

export default MaterialStatistics;
