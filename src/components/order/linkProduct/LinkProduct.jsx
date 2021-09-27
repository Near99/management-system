import React from "react";
import { product } from "../../data/data";
import { Button, Table, Tabs, Descriptions } from "antd";
import { Link } from "react-router-dom";

const NavTabs = () => {
  const { TabPane } = Tabs;
  const toHome = (
    <Link to="/" style={{ color: "#000000" }}>
      首页
    </Link>
  );
  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab={toHome} key="1" />
      <TabPane tab="订单信息" key="2" />
    </Tabs>
  );
};

const OrderDetail = () => {
  return (
    <div>
      <Button style={{ marginBottom: "10px", border: "none", color: "green" }}>
        <Link to="/order">返回</Link>
      </Button>
      <Button style={{ border: "none" }}>关联产品</Button>
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
      <Button
        style={{
          marginTop: "20px",
          marginRight: "20px",
        }}
      >
        添加产品
      </Button>
      <Button>删除</Button>
      <Table
        columns={product.tableData.columns}
        dataSource={product.tableData.data}
        style={{ marginTop: "30px" }}
      />
    </div>
  );
};

function LinkProduct() {
  return (
    <div>
      <NavTabs />
      <OrderDetail />
    </div>
  );
}

export default LinkProduct;
