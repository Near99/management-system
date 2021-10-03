import React from "react";
import Content from "../../templates/Content";
import { Space } from "antd";

const navBarTitle = "库存管理";

const searchBarProps = {
  searchBarFormProps: [
    {
      name: "materialName",
      label: "材料名称",
      required: false,
    },
    {
      name: "category",
      label: "类别",
      required: false,
      dropdown: true,
    },
  ],

  searchBarDropdownItems: [
    {
      optionValue: "a",
      displayValue: "拉链",
    },
    {
      optionValue: "b",
      displayValue: "拉链头",
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
    title: "样板图",
    dataIndex: "protoPic",
    key: "protoPic",
  },
  {
    title: "材料编号",
    dataIndex: "materialNum",
    key: "materialNum",
  },
  {
    title: "材料名称",
    dataIndex: "materialName",
    key: "materialName",
  },
  {
    title: "类别",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "颜色",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "供应商",
    dataIndex: "supplier",
    key: "supplier",
  },
  {
    title: "单价(元)",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "计量单位",
    dataIndex: "unit",
    key: "unit",
  },
  {
    title: "库存量",
    dataIndex: "inventory",
    key: "inventory",
  },
  {
    title: "操作",
    key: "action",
    render: () => (
      <Space size="middle">
        <a href="/" alt="none">
          详情
        </a>
        <a href="/" alt="none">
          更多
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    protoPic: "Pic",
    materialNum: "TDR001",
    materialName: "5号拉链头",
    category: "拉链头",
    color: "黑色",
    supplier: "深圳深达拉链有限公司",
    price: "2.50",
    unit: "个",
    inventory: "2999",
  },
];

const handleAddNewData = () => {
  console.log("clicked");
};

export default function InventoryInfo() {
  // return <Content data={inventory} actionBar={false} />;
  return (
    <Content
      navBarTitle={navBarTitle}
      searchBarProps={searchBarProps}
      drawerProps={drawerProps}
      tableColumns={tableColumns}
      data={data}
      isActionBar={true}
      handleSubmit={handleAddNewData}
      handleSearch={handleAddNewData}
      handleReset={handleAddNewData}
    />
  );
}
