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
import MenuComponent from './(dashboard)/components/MenuComponent';
import SidebarMobileComponent from './(dashboard)/components/SidebarMobileComponent';

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
                    // width={'max-content'}
                    sm={`width={'calc(12vw)'}`}
                    className='hidden md:block'
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
                    <MenuComponent />

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
                            className='hidden md:block'
                        />
                        <div className='sm:block md:hidden mx-5'>
                            <SidebarMobileComponent />
                        </div>

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