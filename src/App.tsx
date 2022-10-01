import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Avatar, Button, Badge } from 'antd';
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Search from './features/search/Search';
import Men from './features/Men/Men';
import Women from './features/Women/Women';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Men', '1', <PieChartOutlined />),
  getItem('Women', '2', <DesktopOutlined />),
  getItem('Kids', 'sub1', <UserOutlined />),
  getItem('Home & Living', '3', <TeamOutlined />),
  getItem('Beauty', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-header-background" style={{ padding: '1rem' }} >
          <Search />
          <div className='side-menu-ic'>
            <Badge count={99} size="small">
              <Button type="text" icon={<ShoppingCartOutlined />} ghost />
            </Badge>
            <Avatar size="default" icon={<UserOutlined />} />
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Men</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Router>
              <Routes>
                <Route path="/" element={<Men />} />
                <Route path="/women" element={<Women />} />
              </Routes>
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Susmitha Design ©2022</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
