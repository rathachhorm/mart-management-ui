import React from 'react'
import { Button, ConfigProvider, Space } from 'antd';

export const buttonAction = () => {
    return (
        <ConfigProvider>
            <Button type="primary" size="large" >
                Gradient Button
            </Button>
        </ConfigProvider>
    )
}
