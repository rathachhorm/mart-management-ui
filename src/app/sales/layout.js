"use client"

import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout as AntLayout, Menu, theme, Flex, Button } from 'antd';
import Link from 'next/link';
import Search from 'antd/es/input/Search';
const { Header, Content, Sider } = AntLayout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const onSearch = (value, _e, info) => console.log(info?.source, value);

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <AntLayout>
            <Header
                style={{
                    position: 'sticky',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    backgroundColor: 'white',
                }}
            >
                {/* ================================ Logo ================================ */}
                <Link href="/sale" className='flex justify-center'>
                    <div style={{ display: "flex", alignItems: "center" }} className='text-black text-xl'>
                        <img
                            src="/images/logo.jpg" // Replace with your SVG or PNG path
                            alt="Logo Icon"
                            style={{
                                width: "56px",
                                height: "56px",
                                margin: "8px",
                                borderRadius: '50%',
                                backgroundColor: 'Black',
                            }}
                        />
                        Mart
                    </div>
                </Link>

                <Search size='large' placeholder="input search text" onSearch={onSearch} enterButton style={{ width: 500 }} />

                <Flex>
                    <Button type='text' shape='circle' icon={<img src="/images/icons8-test-account-48.png" /> } />
                </Flex>

            </Header>
            <AntLayout
                style={{
                    height: "calc(100vh - 64px)",
                }}
            >
                <Sider
                    width={150}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <AntLayout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: 'List',
                            },
                            {
                                title: 'App',
                            },
                        ]}
                        style={{
                            margin: '16px 0',
                        }}
                    />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {/* {children} */}
                        Contents
                    </Content>
                </AntLayout>
                <Sider
                    width={'calc(30vw)'}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                   <div>
                        Items list
                   </div>

                   <div>
                    <Button>Payment</Button>
                   </div>

                </Sider>
            </AntLayout>
        </AntLayout>
    );
};
export default App;