import { Card } from 'antd'
import React from 'react'

export const CardComponent = () => {
    return (
        <Card
            size="small"
            title="Small size card"
            extra={<a href="#">More</a>}
            className='will-change-auto'
        >
            <div className='flex justify-between items-center'>
                <div className='text-3xl'>
                    10000000
                </div>
                <div>
                    <img src='/images/images-components/icons8-order-64.png' />
                </div>
            </div>
        </Card>
    )
}
