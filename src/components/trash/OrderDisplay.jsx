import React from "react";
import { Table, Space } from "antd";

const columns = [
  {
    title: "订单编号",
    dataIndex: "orderNumber",
    key: "orderNumber",
  },
  {
    title: "公司名称",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "客户姓名",
    dataIndex: "clientName",
    key: "clientName",
  },
  {
    title: "订单时间",
    dataIndex: "orderDate",
    key: "orderDate",
  },
  {
    title: "出货时间",
    dataIndex: "shippingDate",
    key: "shippingDate",
  },
  {
    title: "产品数",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "材料成本",
    dataIndex: "mCost",
    key: "mCost",
  },
  {
    title: "利润",
    dataIndex: "profit",
    key: "profit",
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
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "2",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "3",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "4",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "5",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "6",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "7",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "8",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "9",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
  {
    key: "10",
    orderNumber: "20210317-DT001",
    companyName: "John Brown",
    clientName: "北京擎科生物科技有限公司",
    orderDate: "2021.03.12",
    shippingDate: "2021.03.12",
    quantity: "7",
    mCost: "1123.56",
    profit: "99999",
    status: "待确认",
  },
];

const OrderInfoDisplay = () => {
  return (
    <Table
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={data}
      style={{ marginTop: 30 }}
    />
  );
};

export default OrderInfoDisplay;
