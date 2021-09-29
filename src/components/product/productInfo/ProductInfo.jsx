import React from "react";
import Content from "../../templates/Content";
import { Space } from "antd";

const navBarTitle = "产品管理";

const searchBarProps = {
  searchBarFormProps: [
    {
      name: "product",
      label: "产品内容",
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
      displayValue: "长条",
    },
    {
      optionValue: "b",
      displayValue: "单肩",
    },
  ],
};

const drawerProps = {
  drawerTitle: "新增产品",

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
    title: "主图",
    dataIndex: "productPic",
    key: "productPic",
  },
  {
    title: "产品编号",
    dataIndex: "productNumber",
    key: "productNumber",
  },
  {
    title: "产品名称",
    dataIndex: "productName",
    key: "productName",
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
    title: "品牌",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "材料成本",
    dataIndex: "mCost",
    key: "mCost",
  },
  {
    title: "单价",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "利润比",
    dataIndex: "profitMargin",
    key: "profitMargin",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
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
    purchaseNumber: "1123912312",
    procurementStaff: "张三",
    dealType: "现结",
    numOfMaterial: "5",
    procurementDate: "2021-03-14",
    procurementCost: "5,681.50",
    status: "已入库",
    remark: "",
  },
];

const handleAddNewData = () => {
  console.log("clicked");
};

export default function ProductInfo() {
  // return <Content data={product} actionBar={false} />;
  return (
    <Content
      navBarTitle={navBarTitle}
      searchBarProps={searchBarProps}
      drawerProps={drawerProps}
      tableColumns={tableColumns}
      data={data}
      isActionBar={false}
      handleSubmit={handleAddNewData}
    />
  );
}
