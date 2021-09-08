import React from "react";
import { Table, Space } from "antd";

const columns = [
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
        <button>详情</button>
        <button>更多</button>
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
  {
    key: "2",
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
  {
    key: "3",
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

  {
    key: "4",
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
  {
    key: "5",
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
  {
    key: "6",
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

const InventoryInfoDisplay = () => {
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={data}
      style={{ marginTop: 30 }}
    />
  );
};

export default InventoryInfoDisplay;
