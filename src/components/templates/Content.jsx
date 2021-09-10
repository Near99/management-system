import React, { useState } from "react";
import DrawerForm from "./Drawer";
import { Link } from "react-router-dom";
import { Form, Input, Button, Select, Menu, Dropdown, Table, Tabs } from "antd";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";

const SearchBar = ({ formInfo, dropdownItems }) => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

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
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          {dropdown}
        </Select>
      </Form.Item>
    );
  });

  return (
    <Form form={form} layout="inline" name="control-hooks" onFinish={onFinish}>
      {formItems}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "10px" }}
        >
          搜索
        </Button>
        <Button htmlType="button" onClick={onReset}>
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

const ActionBar = ({ buttonInfo, drawerFormInfo }) => {
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
      />
    </div>
  );
};

const ClientInfoDisplay = (props) => {
  const { columns, data } = props.tableData;
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={data}
      style={{ marginTop: 30 }}
    />
  );
};

function Content(props) {
  const {
    searchBarFormInfo,
    searchBarDropdownItems,
    buttonInfo,
    drawerFormInfo,
    tableData,
    navBarTitle,
  } = props.data;

  return (
    <>
      <NavTabs navBarTitle={navBarTitle} />
      <SearchBar
        formInfo={searchBarFormInfo}
        dropdownItems={searchBarDropdownItems}
      />
      {props.actionBar ? (
        <ActionBar buttonInfo={buttonInfo} drawerFormInfo={drawerFormInfo} />
      ) : null}

      <ClientInfoDisplay tableData={tableData} />
    </>
  );
}

export default Content;
