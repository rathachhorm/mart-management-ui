"use client"

import React from 'react';
import { Col, Row } from 'antd';
import { CardComponent } from './(dashboard)/components/CardComponent';


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


const App = () => {
  return (
    <>
      <Row>
        {Array.from({
          length: 4,
        }).map((_, index) => {
          const key = `col-${index}`;
          return (
            <Col
              key={key}
              xs={{
                flex: '100%',
              }}
              sm={{
                flex: '50%',
              }}
              md={{
                flex: '33%',
              }}
              lg={{
                flex: '25%',
              }}
              xl={{
                flex: '25%',
              }}
            >
              <CardComponent />
            </Col>
          );
        })}
      </Row>


      <Table columns={columns} dataSource={data} />

    </>
  );
};
export default App;