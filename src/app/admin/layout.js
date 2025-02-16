"use client"
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout as AntLayout, Menu, theme } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import Link from 'next/link';

const { Header, Sider, Content } = AntLayout;

export default function Layout({ children }) {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const IconStyle = {
        width: "20px",
        height: "20px",
        marginRight: "8px",
    };

    return (
        <>
            <AntLayout
                style={{
                    height: "calc(100vh)",
                }}
            >

                {/* ================================ Sider ================================ */}
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={'max-content'}
                >

                    {/* ================================ Logo ================================ */}
                    <Link href="/admin" className='flex justify-center'>
                        <div style={{ display: "flex", alignItems: "center" }} className='text-white text-xl'>
                            <img
                                src="/images/logo.jpg" // Replace with your SVG or PNG path
                                alt="Logo Icon"
                                style={{
                                    width: "56px",
                                    height: "56px",
                                    margin: "8px",
                                    borderRadius: '50%',
                                }}
                            />
                            {!collapsed && "Mart"} {/* Show text only when not collapsed */}
                        </div>
                    </Link>

                    {/* ================================ Menus ================================ */}
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        overflowedIndicator=""
                        items={[
                            {
                                key: '1',
                                icon: (
                                    <Link href="/admin">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-dashboard-layout-100.png" // Replace with your SVG or PNG path
                                                alt="Dashboard Icon"
                                                style={IconStyle}
                                            />
                                        </div>
                                    </Link>
                                ),
                                label: "Dashboard",
                            },
                            {
                                key: '2',
                                icon: (
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            src="/images/icons8-sales-48.png" // Replace with your SVG or PNG path
                                            alt="Sales Icon"
                                            style={IconStyle}
                                        />
                                    </div>
                                ),
                                label: "Sales",
                                children: [
                                    {
                                        key: "sub-item1",
                                        label: <Link href="/admin/sales/daily-sales">Daily Sales</Link>,
                                    },
                                    {
                                        key: "sub-item2",
                                        label: <Link href="/admin/sales/monthly-trends">Monthly Trends</Link>,
                                    },
                                ]
                            },
                            {
                                key: '3',
                                icon: (
                                    <Link href="/admin/inventory">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-products-pile-100.png" // Replace with your SVG or PNG path
                                                alt="Inventory Icon"
                                                style={IconStyle}
                                            />
                                        </div>
                                    </Link>
                                ),
                                label: "Inventory",
                            },
                            {
                                key: '4',
                                icon: (
                                    <Link href="/admin/customers">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-customers-100.png" // Replace with your SVG or PNG path
                                                alt="Customers Icon"
                                                style={IconStyle}
                                            />
                                        </div>
                                    </Link>
                                ),
                                label: "Customers",
                            },
                            {
                                key: '5',
                                icon: (
                                    <Link href="/admin/purchasing-suppliers">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-supplier-100.png" // Replace with your SVG or PNG path
                                                alt="Purchasing & Suppliers Icon"
                                                style={IconStyle}
                                            />
                                        </div>
                                    </Link>
                                ),
                                label: "Purchasing & Suppliers",
                            },
                            {
                                key: '6',
                                icon: (
                                    <Link href="/admin/reports-analytics">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-reports-100.png" // Replace with your SVG or PNG path
                                                alt="Reports & Analytics Icon"
                                                style={IconStyle}
                                            />
                                        </div>
                                    </Link>
                                ),
                                label: "Reports & Analytics",
                            },
                            {
                                key: '7',
                                icon: (
                                    <Link href="/admin/settings">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-settings-100.png" // Replace with your SVG or PNG path
                                                alt="Settings Icon"
                                                style={IconStyle}
                                            />
                                        </div>
                                    </Link>
                                ),
                                label: "Settings",
                            },
                        ]}
                    />
                </Sider>
                <AntLayout>
                    
                    {/* ================================ Header ================================ */}
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
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

                    {/* ================================ Content ================================ */}
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>
                </AntLayout>
            </AntLayout>
        </>
    )
}