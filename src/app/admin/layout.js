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

                        items={[
                            {
                                key: '1',
                                label: (
                                    <Link href="/admin">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-dashboard-layout-100.png" // Replace with your SVG or PNG path
                                                alt="Dashboard Icon"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    marginRight: "8px",
                                                    marginTop: !collapsed ? "0" : "12px",
                                                }}
                                            />
                                            {!collapsed && "Dashboard"} {/* Show text only when not collapsed */}
                                        </div>
                                    </Link>
                                ),
                            },
                            {
                                key: '2',
                                label: (
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            src="/images/icons8-sales-48.png" // Replace with your SVG or PNG path
                                            alt="Sales Icon"
                                            style={{
                                                width: "16px",
                                                height: "16px",
                                                marginRight: "8px",
                                                marginTop: !collapsed ? "0" : "12px",
                                            }}
                                        />
                                        {!collapsed && "Sales"} {/* Show text only when not collapsed */}
                                    </div>
                                ),
                                children: [
                                    {
                                        key: "sub-item1",
                                        label: (
                                            <Link href="/admin/sales/daily-sales">
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <img
                                                        src="/images/icons8-cash-counter-100.png" // Replace with your SVG or PNG path
                                                        alt="Daily Sales Icon"
                                                        style={{
                                                            width: "16px",
                                                            height: "16px",
                                                            marginRight: "8px",
                                                            marginTop: !collapsed ? "0" : "12px",
                                                        }}
                                                    />
                                                    {!collapsed && "Daily Sales"} {/* Show text only when not collapsed */}
                                                </div>
                                            </Link>
                                        ),
                                    },
                                    {
                                        key: "sub-item2",
                                        label: (
                                            <Link href="/admin/sales/monthly-trends">
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <img
                                                        src="/images/icons8-graph-100.png" // Replace with your SVG or PNG path
                                                        alt="Monthly Trends Icon"
                                                        style={{
                                                            width: "16px",
                                                            height: "16px",
                                                            marginRight: "8px",
                                                            marginTop: !collapsed ? "0" : "12px",
                                                        }}
                                                    />
                                                    {!collapsed && "Monthly Trends"} {/* Show text only when not collapsed */}
                                                </div>
                                            </Link>
                                        ),
                                    },
                                ]
                            },
                            {
                                key: '3',
                                label: (
                                    <Link href="/admin/inventory">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-products-pile-100.png" // Replace with your SVG or PNG path
                                                alt="Inventory Icon"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    marginRight: "8px",
                                                    marginTop: !collapsed ? "0" : "12px",
                                                }}
                                            />
                                            {!collapsed && "Inventory"} {/* Show text only when not collapsed */}
                                        </div>
                                    </Link>
                                ),
                            },
                            {
                                key: '4',
                                label: (
                                    <Link href="/admin/customers">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-customers-100.png" // Replace with your SVG or PNG path
                                                alt="Customers Icon"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    marginRight: "8px",
                                                    marginTop: !collapsed ? "0" : "12px",
                                                }}
                                            />
                                            {!collapsed && "Customers"} {/* Show text only when not collapsed */}
                                        </div>
                                    </Link>
                                ),
                            },
                            {
                                key: '5',
                                label: (
                                    <Link href="/admin/purchasing-suppliers">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-supplier-100.png" // Replace with your SVG or PNG path
                                                alt="Purchasing & Suppliers Icon"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    marginRight: "8px",
                                                    marginTop: !collapsed ? "0" : "12px",
                                                }}
                                            />
                                            {!collapsed && "Purchasing & Suppliers"} {/* Show text only when not collapsed */}
                                        </div>
                                    </Link>
                                ),
                            },
                            {
                                key: '6',
                                label: (
                                    <Link href="/admin/reports-analytics">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-reports-100.png" // Replace with your SVG or PNG path
                                                alt="Reports & Analytics Icon"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    marginRight: "8px",
                                                    marginTop: !collapsed ? "0" : "12px",
                                                }}
                                            />
                                            {!collapsed && "Reports & Analytics"} {/* Show text only when not collapsed */}
                                        </div>
                                    </Link>
                                ),
                            },
                            {
                                key: '7',
                                label: (
                                    <Link href="/admin/settings">
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="/images/icons8-settings-100.png" // Replace with your SVG or PNG path
                                                alt="Settings Icon"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    marginRight: "8px",
                                                    marginTop: !collapsed ? "0" : "12px",
                                                }}
                                            />
                                            {!collapsed && "Settings"} {/* Show text only when not collapsed */}
                                        </div>
                                    </Link>
                                ),
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