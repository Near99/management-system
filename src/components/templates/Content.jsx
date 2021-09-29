import React, { useState } from "react";
import DrawerForm from "./Drawer";
import { Link } from "react-router-dom";
import { Form, Input, Button, Select, Menu, Dropdown, Table, Tabs } from "antd";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";

const SearchBar = ({ formInfo, dropdownItems, handleSearch, handleReset }) => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const dropdown = dropdownItems.map((item, index) => {
    return (
      <Option key={index} value={item.optionValue}>
        {item.displayValue}
      </Option>
    );
  });

  const formItems = formInfo.map((item, index) => {
    if (!item.dropdown) {
      return (
        <Form.Item
          key={index}
          name={item.name}
          label={item.label}
          rules={[
            {
              required: item.required,
            },
          ]}
        >
          <Input />
        </Form.Item>
      );
    }
    return (
      <Form.Item
        key={index}
        name={item.name}
        label={item.label}
        rules={[
          {
            required: item.required,
          },
        ]}
      >
        <Select placeholder="" style={{ width: "220px" }} allowClear>
          {dropdown}
        </Select>
      </Form.Item>
    );
  });

  return (
    <Form
      form={form}
      layout="inline"
      name="control-hooks"
      onFinish={handleSearch}
    >
      {formItems}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "10px" }}
        >
          搜索
        </Button>
        <Button htmlType="button" onClick={handleReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

const NavTabs = ({ navBarTitle }) => {
  const { TabPane } = Tabs;
  const toHome = (
    <Link to="/" style={{ color: "#000000" }}>
      首页
    </Link>
  );
  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab={toHome} key="1" />
      <TabPane tab={navBarTitle} key="2" />
    </Tabs>
  );
};

const ActionBar = ({ buttonInfo, drawerFormInfo, drawerSubmit }) => {
  const dropdownMenu = (
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
      <Menu.Item>
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

  const dropdown = (
    <Dropdown overlay={dropdownMenu} trigger={["click"]}>
      <a
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        href="/"
        style={{ color: "#000000", marginLeft: 30 }}
      >
        批量操作{" "}
        <span>
          <DownOutlined />
        </span>
      </a>
    </Dropdown>
  );

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const buttons = buttonInfo.map((item, index) => {
    if (!index) {
      return (
        <Button key={index} onClick={showDrawer} type="primary">
          <span>
            <PlusOutlined style={{ marginRight: "7px" }} />
          </span>
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
      {dropdown}
      <DrawerForm
        visible={visible}
        onClose={onClose}
        drawerFormInfo={drawerFormInfo}
        drawerSubmit={drawerSubmit}
      />
    </div>
  );
};

const ClientInfoDisplay = ({ tableColumns, data }) => {
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      columns={tableColumns}
      dataSource={data}
      style={{ marginTop: 30 }}
    />
  );
};

function Content({
  navBarTitle,
  searchBarProps,
  drawerProps,
  tableColumns,
  data,
  isActionBar,
  handleSubmit,
  handleSearch,
  handleReset,
}) {
  return (
    <>
      <NavTabs navBarTitle={navBarTitle} />
      <SearchBar
        formInfo={searchBarProps.searchBarFormProps}
        dropdownItems={searchBarProps.searchBarDropdownItems}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      {isActionBar ? (
        <ActionBar
          buttonInfo={drawerProps.buttonNames}
          drawerFormInfo={drawerProps}
          drawerSubmit={handleSubmit}
        />
      ) : null}

      <ClientInfoDisplay tableColumns={tableColumns} data={data} />
    </>
  );
}

export default Content;
