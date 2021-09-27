import React, { useState } from "react";
import Content from "../../templates/Content";
import { Button, Space, Dropdown, Menu, Modal } from "antd";

export default function ClientInfo() {
  const data = [
    {
      key: "1",
      companyName: "北京擎科生物科技有限公司",
      clientName: "张三",
      phoneNumber: "12345677232",
      gender: "男",
      nationality: "美国",
      address: "New York No. 1 Lake Park",
      email: "zgtm@gmail.com",
      reachedVia: "QQ",
      bankAccount: "1234567",
      bankAccountInfo: "中国邮政",
    },
    {
      key: "2",
      companyName: "南京擎科生物科技有限公司",
      clientName: "李四",
      phoneNumber: "12345677232",
      gender: "男",
      nationality: "美国",
      address: "New York No. 1 Lake Park",
      email: "zgtm@gmail.com",
      reachedVia: "QQ",
      bankAccount: "1234567",
      bankAccountInfo: "中国邮政",
    },
    {
      key: "3",
      companyName: "东京擎科生物科技有限公司",
      clientName: "王五",
      phoneNumber: "12345677232",
      gender: "男",
      nationality: "中国",
      address: "New York No. 1 Lake Park",
      email: "zgtm@gmail.com",
      reachedVia: "QQ",
      bankAccount: "1234567",
      bankAccountInfo: "中国邮政",
    },
    {
      key: "4",
      companyName: "长安擎科生物科技有限公司",
      clientName: "沈六",
      phoneNumber: "12345677232",
      gender: "男",
      nationality: "美国",
      address: "New York No. 1 Lake Park",
      email: "zgtm@gmail.com",
      reachedVia: "QQ",
      bankAccount: "1234567",
      bankAccountInfo: "中国邮政",
    },
  ];

  const [tableData, setTableData] = useState(data);

  const handleSubmit = (e) => {
    console.log(e);
    const newData = e;
    newData.key = `${tableData.length + 1}`;
    const newTableData = [...tableData, newData];
    setTableData(newTableData);
  };

  const [toggleDetail, setToggleDetail] = useState(false);

  const handleDetailToggle = () => {
    setToggleDetail(!toggleDetail);
  };

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

  const DropMenu = ({ record }) => {
    const handleDelete = () => {
      const newData = tableData.filter((item) => {
        return item.key !== record.key;
      });
      setTableData(newData);
    };

    const handleEdit = () => {
      console.log(record);
    };

    return (
      <Menu>
        <Menu.Item key="1" onClick={handleEdit}>
          编辑
        </Menu.Item>
        <Menu.Item key="2" onClick={handleDelete}>
          删除
        </Menu.Item>
      </Menu>
    );
  };

  const navBarTitle = "客户管理";

  const searchBarProps = {
    searchBarFormProps: [
      {
        name: "客户姓名",
        label: "客户姓名",
        required: false,
      },
      {
        name: "国籍",
        label: "国籍",
        required: false,
        dropdown: true,
      },
    ],

    searchBarDropdownItems: [
      {
        optionValue: "us",
        displayValue: "美国",
      },
      {
        optionValue: "cn",
        displayValue: "中国",
      },
      {
        optionValue: "uk",
        displayValue: "英国",
      },
      {
        optionValue: "sg",
        displayValue: "新加坡",
      },
    ],
  };

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

  return (
    <div>
      <Content
        navBarTitle={navBarTitle}
        searchBarProps={searchBarProps}
        drawerProps={drawerProps}
        tableColumns={tableColumns}
        data={tableData}
        isActionBar={true}
        handleSubmit={handleSubmit}
      />
      {clientDetail}
    </div>
  );
}
