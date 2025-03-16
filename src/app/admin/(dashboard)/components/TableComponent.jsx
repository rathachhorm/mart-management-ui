import React from 'react'
import { Table } from 'antd';
const columns = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Units Sold',
    dataIndex: 'unitsSold',
    key: 'unitsSold',
  },
  {
    title: 'Revenue Generated',
    dataIndex: 'revenueGenerated',
    key: 'revenueGenerated',
  },
  
];
const data = [
  {
    key: '1',
    productName: 'John Brown',
    unitsSold: 32,
    revenueGenerated: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    productName: 'Jim Green',
    unitsSold: 42,
    revenueGenerated: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    productName: 'Joe Black',
    unitsSold: 32,
    revenueGenerated: 'Sydney No. 1 Lake Park',
  },
];

const TableComponent = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default TableComponent