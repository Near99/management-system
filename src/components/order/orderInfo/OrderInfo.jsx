import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Descriptions,
  Button,
  Menu,
  Space,
  Dropdown,
  Modal,
  Form,
  Input,
} from "antd";
import { product } from "../../data/data";
import Content from "../../templates/Content";

export default function OrderInfo() {
  const [toggleOrderDetail, setToggleOrderDetail] = useState(false);

  const [toggleCostSetting, setToggleCostSetting] = useState(false);

  const handleToggleCost = () => {
    setToggleCostSetting(!toggleCostSetting);
  };

  const handleToggleDetail = () => {
    setToggleOrderDetail(!toggleOrderDetail);
  };

  const orderDetail = (
    <Modal
      title="订单详情"
      width={2000}
      centered
      visible={toggleOrderDetail}
      onOk={handleToggleDetail}
      onCancel={handleToggleDetail}
    >
      <Descriptions bordered>
        <Descriptions.Item label="订单编号">20210317-DT001</Descriptions.Item>
        <Descriptions.Item label="订单时间">2021.03.12</Descriptions.Item>
        <Descriptions.Item label="订单状态">待生产</Descriptions.Item>
        <Descriptions.Item label="材料成本(元)">2158.30</Descriptions.Item>
        <Descriptions.Item label="产品数">6</Descriptions.Item>
        <Descriptions.Item label="公司名">
          擎科生物科技有限公司
        </Descriptions.Item>
        <Descriptions.Item label="出货时间">2021.03.21</Descriptions.Item>
        <Descriptions.Item label="材料状况">充足</Descriptions.Item>
        <Descriptions.Item label="包装成本(元)">6990.00</Descriptions.Item>
        <Descriptions.Item label="总数量">126,990</Descriptions.Item>
        <Descriptions.Item label="客户名称">邓晓杰</Descriptions.Item>
        <Descriptions.Item label="计划时间">5个月</Descriptions.Item>
        <Descriptions.Item label="出货信息">FDS241</Descriptions.Item>
        <Descriptions.Item label="运输成本(元)">800</Descriptions.Item>
        <Descriptions.Item label="总定价(元)">1800</Descriptions.Item>
        <Descriptions.Item label="备注">
          这个订单需要加急处理，客户希望在6月份出货，出往意大利。
        </Descriptions.Item>
      </Descriptions>
      <Table
        columns={product.tableData.columns}
        dataSource={product.tableData.data}
        style={{ marginTop: "30px" }}
      />
    </Modal>
  );

  const costSetting = (
    <Modal
      title="成本设置"
      centered
      visible={toggleCostSetting}
      onOk={handleToggleCost}
      onCancel={handleToggleCost}
      width={1000}
    >
      <Descriptions bordered>
        <Descriptions.Item label="订单编号">20210317-DT001</Descriptions.Item>
        <Descriptions.Item label="产品数">6</Descriptions.Item>
        <Descriptions.Item label="材料成本(元)">2158.09</Descriptions.Item>
        <Descriptions.Item label="总数量">1700</Descriptions.Item>
        <Descriptions.Item label="总定价(元))">1,580,000</Descriptions.Item>
      </Descriptions>

      <Form layout="horizontal" hideRequiredMark style={{ marginTop: "20px" }}>
        <Form.Item
          name={"包装成本"}
          label={"包装成本"}
          rules={[{ required: false }]}
        >
          <Input placeholder="" />
        </Form.Item>

        <Form.Item
          name={"运输成本"}
          label={"运输成本"}
          rules={[{ required: false }]}
        >
          <Input placeholder="" />
        </Form.Item>

        <Form.Item
          name={"折损成本"}
          label={"折损成本"}
          rules={[{ required: false }]}
        >
          <Input placeholder="" />
        </Form.Item>

        <Form.Item
          name={"其他成本"}
          label={"其他成本"}
          rules={[{ required: false }]}
        >
          <Input placeholder="" />
        </Form.Item>
      </Form>
    </Modal>
  );

  const menu = (
    <Menu>
      <Menu.Item>编辑订单</Menu.Item>
      <Menu.Item>删除订单</Menu.Item>
      <Menu.Item>
        <Link to="/order/link-product">关联产品</Link>
      </Menu.Item>
      <Menu.Item onClick={handleToggleCost}>成本设置</Menu.Item>
      <Menu.Item>材料统计</Menu.Item>
      <Menu.Item>导出订货单</Menu.Item>
      <Menu.Item>订货报表</Menu.Item>
    </Menu>
  );

  const navBarTitle = "订单管理";

  const searchBarProps = {
    searchBarFormProps: [
      {
        name: "orderNumber",
        label: "订单编号",
        required: false,
      },
      {
        name: "clientInfo",
        label: "客户信息",
        required: false,
        dropdown: true,
      },
    ],

    searchBarDropdownItems: [
      {
        optionValue: "zhangxiaofeng",
        displayValue: "张小丰",
      },
      {
        optionValue: "lidi",
        displayValue: "李帝",
      },
    ],
  };

  const drawerProps = {
    drawerTitle: "新增订单",

    buttonNames: ["新增订单", "导出", "导入", "回收站"],

    formLabels: [
      {
        name: "orderNumber",
        label: "订单编号",
        required: true,
      },
      {
        name: "client",
        label: "客户",
        required: true,
      },
      {
        name: "orderDate",
        label: "订单时间",
        required: false,
        datePicker: true,
      },
      {
        name: "shippingDate",
        label: "出货时间",
        required: true,
        datePicker: true,
      },
      {
        name: "productionPeriod",
        label: "计划时常",
        required: true,
      },
      {
        name: "shippingBy",
        label: "出货方式",
        required: false,
      },
      {
        name: "shippingAddress",
        label: "出货地址",
        required: false,
      },
      {
        name: "orderStatus",
        label: "订单状态",
        required: false,
        dropdown: true,
      },
      {
        name: "remark",
        label: "备注",
        required: false,
        textArea: true,
      },
    ],
    orderStatus: [
      {
        optionValue: "1",
        displayValue: "生产中",
      },
      {
        optionValue: "2",
        displayValue: "已完成",
      },
    ],
  };

  const tableColumns = [
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
          <Button onClick={handleToggleDetail}>详情</Button>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>更多</Button>
          </Dropdown>
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
  ];

  const [tableData, setTableData] = useState(data);

  const handleSubmit = (e) => {
    console.log(e);
    const newData = e;
    newData.key = `${tableData.length + 1}`;
    data.push(newData);
    const newTableData = [...tableData, newData];
    setTableData(newTableData);
  };

  return (
    <div>
      <Content
        navBarTitle={navBarTitle}
        searchBarProps={searchBarProps}
        drawerProps={drawerProps}
        tableColumns={tableColumns}
        data={data}
        isActionBar={true}
        handleSubmit={handleSubmit}
      />
      {orderDetail}
      {costSetting}
    </div>
  );
}
