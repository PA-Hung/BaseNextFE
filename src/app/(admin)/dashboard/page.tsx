"use client"
import React, { useState } from 'react';
import {
    LaptopOutlined, NotificationOutlined, UserOutlined,
    MenuFoldOutlined, MenuUnfoldOutlined, BugOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'antd/es/typography/Link';

const { Header, Sider, Content } = Layout;

const About: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
            const key = String(index + 1);

            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: `subnav ${key}`,
            };
        },
    );

    const [collapsed, setCollapsed] = useState(false);

    return (

        <Layout>
            <Sider
                theme='light'
                trigger={null}
                collapsible collapsed={collapsed}
                style={{ height: '100vh', overflow: 'hidden' }} width={200} >
                <div style={{ height: 32, margin: 16, textAlign: 'center' }}>
                    <Link href='/'><BugOutlined /> Home</Link>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    items={items2}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content style={{ margin: '15px 15px 0 15px' }}>
                    {/* <Breadcrumb style={{ margin: '5px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div style={{
                        padding: 24, background: colorBgContainer,
                        height: 'calc(100vh - 86px)',
                        borderRadius: '10px'
                    }}>
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default About