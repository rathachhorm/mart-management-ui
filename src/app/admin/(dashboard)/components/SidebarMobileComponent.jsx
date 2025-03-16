import React, { useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import MenuComponent from './MenuComponent';

const SidebarMobileComponent = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button
                type="primary"
                icon={open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                
                onClick={() => showDrawer(!open)}
            >
            </Button>
            <Drawer
                title="Mart"
                placement={'left'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'left'}
                style={{
                        fontSize: '16px',
                        width: "calc(100vw-24px)"
                }}
            >
                <MenuComponent/>
            </Drawer>
        </div>
    )
}

export default SidebarMobileComponent
