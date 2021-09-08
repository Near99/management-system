import React, { useState } from "react";
import DrawerForm from "./Drawer";
import { Button, Menu, Dropdown } from "antd";

const actionDropdownMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        删除
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        导出详情
      </a>
    </Menu.Item>
  </Menu>
);
const ActionBar = ({ buttonInfo, drawerFormInfo }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const buttons = buttonInfo.map((item, index) => {
    if (index === 0) {
      return (
        <Button key={index} onClick={showDrawer} type="primary">
          {item}
        </Button>
      );
    }
    return (
      <Button key={index} type="primary">
        {item}
      </Button>
    );
  });
  return (
    <div className="action-menu">
      {buttons}
      <Dropdown overlay={actionDropdownMenu} trigger={["click"]}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          href="/"
          style={{ color: "#000000", marginLeft: 30 }}
        >
          批量操作
        </a>
      </Dropdown>
      <DrawerForm
        visible={visible}
        onClose={onClose}
        drawerFormInfo={drawerFormInfo}
      />
    </div>
  );
};

export default ActionBar;
