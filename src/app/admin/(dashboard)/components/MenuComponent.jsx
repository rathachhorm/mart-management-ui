import { Menu } from 'antd'
import Link from 'next/link'
import React from 'react'

const MenuComponent = () => {
    
    const IconStyle = {
        width: "20px",
        height: "20px",
        marginRight: "8px",
    };

  return (
    <div>
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
    </div>
  )
}

export default MenuComponent