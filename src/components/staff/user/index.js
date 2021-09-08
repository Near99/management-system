import React from "react";
import SearchBar from "../../templates/SearchBar";
import ActionBar from "../../templates/ActionBar";
import UserInfoDisplay from "./userDisplay";

const UserInfo = () => {
  const formInfo = [
    {
      name: "account",
      label: "帐号",
      required: false,
      dropdown: false,
    },
    {
      name: "gender",
      label: "性别",
      required: false,
      dropdown: true,
    },
  ];

  const dropdownItems = [
    {
      optionValue: "male",
      displayValue: "男",
    },
    {
      optionValue: "female",
      displayValue: "女",
    },
  ];

  const buttonInfo = ["添加用户", "导入", "回收站"];

  const drawerFormInfo = {
    drawerTitle: "新增客户",
    formInfo: [
      {
        name: "companyName",
        label: "公司名称",
        required: true,
        dropdown: false,
      },
      {
        name: "clientName",
        label: "客户姓名",
        required: true,
        dropdown: false,
      },
      {
        name: "phoneNumber",
        label: "手机号",
        required: false,
        dropdown: false,
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
      { name: "address", label: "地址", required: false, dropdown: false },
      { name: "email", label: "邮件", required: false, dropdown: false },
      {
        name: "reachedVia",
        label: "联系途径",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccountInfo",
        label: "开户行",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccount",
        label: "银行账户",
        required: false,
        dropdown: false,
      },
    ],
    gender: [
      {
        optionValue: "male",
        displayValue: "男",
      },
      {
        optionValue: "female",
        displayValue: "女",
      },
    ],
  };
  return (
    <div>
      <SearchBar formInfo={formInfo} dropdownItems={dropdownItems} />
      <ActionBar buttonInfo={buttonInfo} drawerFormInfo={drawerFormInfo} />
      <UserInfoDisplay />
    </div>
  );
};

export default UserInfo;
