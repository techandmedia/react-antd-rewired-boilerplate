import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
  console.log(props);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log("broken",broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />

            <span className="nav-text">Home</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />

            <span className="nav-text">About</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">Contact</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          {props.header}
          {/* <PageHeader /> */}
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 460,
              overflow: "initial"
            }}
          >
            {props.children}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
