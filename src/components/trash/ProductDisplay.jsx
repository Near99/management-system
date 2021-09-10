import React from "react";
import { Table, Space } from "antd";

const columns = [
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
        <button>详情</button>
        <button>更多</button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "2",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "3",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "4",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "5",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "6",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "7",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "8",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
  {
    key: "9",
    productPic: "Pic",
    productNumber: "FDS241",
    productName: "手提便携袋",
    category: "长条",
    color: "黑色",
    brand: "Nike",
    mCost: "50",
    price: "199",
    profitMargin: "25%",
    status: "正常",
    inventory: "22",
  },
];

const ProductInfoDisplay = () => {
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={data}
      style={{ marginTop: 30 }}
    />
  );
};

export default ProductInfoDisplay;
