import React from "react";
import { Table, Space } from "antd";

const columns = [
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
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "操作",
    key: "action",
    render: () => (
      <Space size="middle">
        <a href="#" alt="none">
          详情
        </a>
        <a href="#" alt="none">
          更多
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "2",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "3",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "4",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "5",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "6",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "7",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "8",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
  {
    key: "10",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    phoneNumber: "123-4567-7232",
    gender: "男",
    nationality: "美国",
    address: "New York No. 1 Lake Park",
    email: "zgtm@gmail.com",
    contact: "QQ",
  },
];

const ClientInfoDisplay = () => {
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={data}
      style={{ marginTop: 30 }}
    />
  );
};

export default ClientInfoDisplay;
