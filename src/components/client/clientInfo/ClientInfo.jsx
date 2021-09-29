import React, { useState } from "react";
import Content from "../../templates/Content";
import {
  Button,
  Space,
  Dropdown,
  Menu,
  Modal,
  Form,
  Row,
  Col,
  Input,
  Select,
  DatePicker,
} from "antd";

export default function ClientInfo() {
  const drawerProps = {
    drawerTitle: "新增客户",

    buttonNames: ["添加客户", "导入", "回收站"],

    formLabels: [
      {
        name: "companyName",
        label: "公司名称",
        required: true,
      },
      {
        name: "clientName",
        label: "客户姓名",
        required: true,
      },
      {
        name: "phoneNumber",
        label: "手机号",
        required: false,
      },
      {
        name: "gender",
        label: "性别",
        required: true,
        dropdown: true,
      },
      {
        name: "nationality",
        label: "国籍",
        required: true,
        dropdown: true,
      },
      { name: "address", label: "地址", required: false },
      { name: "email", label: "邮件", required: false },
      {
        name: "reachedVia",
        label: "联系途径",
        required: false,
      },
      {
        name: "bankAccountInfo",
        label: "开户行",
        required: false,
      },
      {
        name: "bankAccount",
        label: "银行账户",
        required: false,
      },
    ],

    gender: [
      {
        optionValue: "男",
        displayValue: "男",
      },
      {
        optionValue: "女",
        displayValue: "女",
      },
    ],

    nationality: [
      {
        optionValue: "美国",
        displayValue: "美国",
      },
      {
        optionValue: "中国",
        displayValue: "中国",
      },
      {
        optionValue: "英国",
        displayValue: "英国",
      },
      {
        optionValue: "新加坡",
        displayValue: "新加坡",
      },
    ],
  };

  const data = [
    {
      key: "1",
      companyName: "北京擎科生物科技有限公司",
      clientName: "张三",
      phoneNumber: "62345677232",
      gender: "男",
      nationality: "中国",
      address: "北京中关村大厦",
      email: "cny@gmail.com",
      reachedVia: "绑架",
      bankAccount: "1234567",
      bankAccountInfo: "中国邮政",
    },
    {
      key: "2",
      companyName: "南京科生有限公司",
      clientName: "李四",
      phoneNumber: "72345677232",
      gender: "男",
      nationality: "英国",
      address: "Hyde Park, London",
      email: "yen@qq.com",
      reachedVia: "微信",
      bankAccount: "2456781",
      bankAccountInfo: "招商银行",
    },
    {
      key: "3",
      companyName: "东京生物科技有限公司",
      clientName: "王五",
      phoneNumber: "92345677232",
      gender: "男",
      nationality: "新加坡",
      address: "Lim Tua Tow rd, Singapore",
      email: "huj@hotmail.com",
      reachedVia: "邮件",
      bankAccount: "3872819",
      bankAccountInfo: "中国邮政",
    },
    {
      key: "4",
      companyName: "长安科技有限公司",
      clientName: "沈六",
      phoneNumber: "12345677232",
      gender: "男",
      nationality: "美国",
      address: "No. 1 Lake Parkm, New York",
      email: "usd@163.com",
      reachedVia: "电话",
      bankAccount: "457128",
      bankAccountInfo: "民生银行",
    },
  ];

  const [tableData, setTableData] = useState(data);

  const handleAddNewData = (value) => {
    const newData = value;
    // newData.key = `${tableData.length + 1}`;
    newData.key = `${Math.floor(Math.random() * 9999)}`;
    const newTableData = [...tableData, newData];
    setTableData(newTableData);
  };

  const [toggleDetail, setToggleDetail] = useState(false);

  const handleDetailToggle = () => {
    setToggleDetail(!toggleDetail);
  };

  const [filteredClientInfo, setFilteredClientInfo] = useState([]);

  const [searchOn, setSearchOn] = useState(false);

  const handleSearching = (value) => {
    const { clientName, nationality } = value;
    if (!clientName && !nationality) {
      setSearchOn(false);
      return;
    }
    if (clientName && nationality) {
      const result = tableData.filter(
        (item) =>
          item.nationality === nationality &&
          item.clientName.includes(clientName)
      );
      setFilteredClientInfo(result);
      setSearchOn(true);
      return;
    }
    if (!clientName) {
      const result = tableData.filter(
        (item) => item.nationality === nationality
      );
      setFilteredClientInfo(result);
      setSearchOn(true);
    }
    if (!nationality) {
      const result = tableData.filter((item) =>
        item.clientName.includes(clientName)
      );
      setFilteredClientInfo(result);
      setSearchOn(true);
    }
  };

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
    setSearchOn(false);
  };

  const DropMenu = ({ record }) => {
    const { Option } = Select;

    const handleDelete = () => {
      const afterDeletion = tableData.filter((item) => item.key !== record.key);
      setTableData(afterDeletion);
    };

    const [toggleEditing, setToggleEditing] = useState(false);

    const handleEditingToggle = () => {
      setToggleEditing(!toggleEditing);
    };

    const handleUpdate = (e) => {
      const newTableData = tableData.map((item) => {
        if (item.key === record.key) {
          const newData = e;
          newData.key = record.key;
          return newData;
        }
        return item;
      });
      setTableData(newTableData);
      handleEditingToggle();
    };

    const formRow = drawerProps.formLabels.map((item, key) => {
      if (item.dropdown) {
        const options = drawerProps[item.name].map((item, key) => {
          return (
            <Option key={key} value={item.optionValue}>
              {item.displayValue}
            </Option>
          );
        });

        return (
          <Row gutter={16} key={key}>
            <Col span={17}>
              <Form.Item
                name={item.name}
                label={item.label}
                rules={[{ required: item.required }]}
                initialValue={record[item.name]}
              >
                <Select placeholder="">{options}</Select>
              </Form.Item>
            </Col>
          </Row>
        );
      }

      if (item.datePicker) {
        return (
          <Row gutter={16} key={key}>
            <Col span={17}>
              <Form.Item
                name={item.name}
                label={item.label}
                rules={[{ required: item.required }]}
              >
                <DatePicker placeholder="" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        );
      }

      if (item.textArea) {
        return (
          <Row gutter={16} key={key}>
            <Col span={17}>
              <Form.Item
                name={item.name}
                label={item.label}
                rules={[{ required: item.required }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
        );
      }

      return (
        <Row gutter={16} key={key}>
          <Col span={17}>
            <Form.Item
              name={item.name}
              label={item.label}
              rules={[{ required: item.required }]}
              initialValue={record[item.name]}
            >
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
      );
    });

    const editingModal = (
      <Modal
        title="编辑客户信息"
        centered
        width="500px"
        visible={toggleEditing}
        onOk={handleEditingToggle}
        onCancel={handleEditingToggle}
      >
        <Form layout="vertical" onFinish={handleUpdate}>
          {formRow}
          <Form.Item>
            <Button style={{ marginRight: "20px" }}>取消</Button>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );

    return (
      <Menu>
        <Menu.Item key="1" onClick={handleEditingToggle}>
          编辑
        </Menu.Item>
        <Menu.Item key="2" onClick={handleDelete}>
          删除
        </Menu.Item>
        {editingModal}
      </Menu>
    );
  };

  const navBarTitle = "客户管理";

  const searchBarProps = {
    searchBarFormProps: [
      {
        name: "clientName",
        label: "客户姓名",
        required: false,
      },
      {
        name: "nationality",
        label: "国籍",
        required: false,
        dropdown: true,
      },
    ],

    searchBarDropdownItems: [
      {
        optionValue: "美国",
        displayValue: "美国",
      },
      {
        optionValue: "中国",
        displayValue: "中国",
      },
      {
        optionValue: "英国",
        displayValue: "英国",
      },
      {
        optionValue: "新加坡",
        displayValue: "新加坡",
      },
    ],
  };

  const tableColumns = [
    {
      title: "公司名称",
      dataIndex: "companyName",
      key: "companyname",
    },
    {
      title: "客户姓名",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "手机号码",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "国籍",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "联系途径",
      dataIndex: "reachedVia",
      key: "reachedVia",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={handleDetailToggle}>详情</Button>
          <Dropdown overlay={<DropMenu record={record} />} trigger={["click"]}>
            <Button>更多</Button>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const clientDetail = (
    <Modal
      title="客户详情"
      centered
      visible={toggleDetail}
      onOk={handleDetailToggle}
      onCancel={handleDetailToggle}
    >
      客户信息
    </Modal>
  );

  return (
    <>
      <Content
        navBarTitle={navBarTitle}
        searchBarProps={searchBarProps}
        drawerProps={drawerProps}
        tableColumns={tableColumns}
        data={searchOn ? filteredClientInfo : tableData}
        isActionBar={true}
        handleSubmit={handleAddNewData}
        handleSearch={handleSearching}
        handleReset={handleReset}
      />
      {clientDetail}
    </>
  );
}
