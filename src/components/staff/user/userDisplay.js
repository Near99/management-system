import React from "react";
import { Table, Space } from "antd";

const columns = [
  {
    title: "头像",
    dataIndex: "profilePic",
    key: "profilePic",
  },
  {
    title: "用户帐号",
    dataIndex: "userAccount",
    key: "userAccount",
  },
  {
    title: "用户姓名",
    dataIndex: "userName",
    key: "userName",
  },
  {
    title: "手机号",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "性别",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "部门",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "职务",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "操作",
    key: "action",
    render: () => (
      <Space size="middle">
        <button>详情</button>
        <button>更多</button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    profilePic: "profilePic",
    userAccount: "leibs",
    userName: "雷军",
    phoneNumber: "18612349842",
    gender: "男",
    department: "项目研发部",
    position: "高级研发",
    status: "正常",
  },
  {
    key: "2",
    profilePic: "profilePic",
    userAccount: "robin",
    userName: "李彦宏",
    phoneNumber: "18612349842",
    gender: "男",
    department: "项目研发部",
    position: "高级研发",
    status: "正常",
  },
  {
    key: "3",
    profilePic: "profilePic",
    userAccount: "pony",
    userName: "马化腾",
    phoneNumber: "18612349842",
    gender: "男",
    department: "项目研发部",
    position: "高级研发",
    status: "正常",
  },
  {
    key: "4",
    profilePic: "profilePic",
    userAccount: "jack",
    userName: "马云",
    phoneNumber: "18612349842",
    gender: "男",
    department: "项目研发部",
    position: "高级研发",
    status: "正常",
  },
  {
    key: "5",
    profilePic: "profilePic",
    userAccount: "jobs",
    userName: "Steve Jobs",
    phoneNumber: "18612349842",
    gender: "男",
    department: "项目研发部",
    position: "高级研发",
    status: "正常",
  },
  {
    key: "6",
    profilePic: "profilePic",
    userAccount: "musk",
    userName: "Elon Musk",
    phoneNumber: "18612349842",
    gender: "男",
    department: "项目研发部",
    position: "高级研发",
    status: "正常",
  },
];

const UserInfoDisplay = () => {
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={data}
      style={{ marginTop: 30 }}
    />
  );
};

export default UserInfoDisplay;
