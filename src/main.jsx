import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import {
  PieChartOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  BellFilled,
  ExportOutlined,
} from "@ant-design/icons";
import "./App.css";

function Main(props) {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const userDropdownMenu = (
    <Menu>
      <Menu.Item key="0">个人中心</Menu.Item>
      <Menu.Item key="1">帐号设置</Menu.Item>
      <Menu.Item key="2">系统设置</Menu.Item>
      <Menu.Item key="3">密码修改</Menu.Item>
      <Menu.Item key="4">切换部门</Menu.Item>
      <Menu.Item key="5">清楚缓存</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">Logo</div>

        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="客户管理">
            <Menu.Item key="2">
              <Link to="/client">客户信息</Link>
            </Menu.Item>
            <Menu.Item key="3">来往统计</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="订单管理">
            <Menu.Item key="4">
              <Link to="/order">订单详情</Link>
            </Menu.Item>
            <Menu.Item key="5">来往统计</Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<UserOutlined />} title="产品管理">
            <Menu.Item key="6">
              <Link to="/product">产品详情</Link>
            </Menu.Item>
            <Menu.Item key="7">分类管理</Menu.Item>
            <Menu.Item key="8">材料管理</Menu.Item>
            <Menu.Item key="9">产品统计</Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<UserOutlined />} title="库存管理">
            <Menu.Item key="10">
              <Link to="/inventory">库存情况</Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/procurement">采购管理</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub5" icon={<UserOutlined />} title="成本管理">
            <Menu.Item key="12">成本管理</Menu.Item>
            <Menu.Item key="13">缴费记录</Menu.Item>
            <Menu.Item key="14">工资管理</Menu.Item>
            <Menu.Item key="15">其他费用</Menu.Item>
            <Menu.Item key="16">统计报表</Menu.Item>
          </SubMenu>

          <SubMenu key="sub6" icon={<UserOutlined />} title="人员管理">
            <Menu.Item key="17">人员管理</Menu.Item>
            <Menu.Item key="18">人员管理</Menu.Item>
          </SubMenu>

          <SubMenu key="sub7" icon={<UserOutlined />} title="系统管理">
            <Menu.Item key="19">
              <Link to="/user">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="20">角色管理</Menu.Item>
            <Menu.Item key="21">部门管理</Menu.Item>
            <Menu.Item key="22">职务设置</Menu.Item>
            <Menu.Item key="23">菜单管理</Menu.Item>
            <Menu.Item key="24">个人设置</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background header-container"
          style={{ paddingLeft: "2rem" }}
        >
          <div>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </div>
          <div className="logged-in-menu">
            <SearchOutlined style={{ marginRight: 20 }} />
            <BellFilled style={{ marginRight: 20 }} />
            <Dropdown overlay={userDropdownMenu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="/"
                style={{ color: "#000000", marginRight: 20 }}
              >
                欢迎您，Admin
              </a>
            </Dropdown>
            <ExportOutlined style={{ marginRight: 2 }} />
            <span>退出登录</span>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.childComponent}
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
