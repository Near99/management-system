import React from "react";
import { Button, Menu, Dropdown } from "antd";

const actionDropdownMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const ActionMenu = () => {
  return (
    <div className="action-menu">
      <Button type="primary">添加客户</Button>
      <Button type="primary">导入</Button>
      <Button type="primary">回收站</Button>
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
    </div>
  );
};

export default ActionMenu;
