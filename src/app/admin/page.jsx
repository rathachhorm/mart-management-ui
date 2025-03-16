"use client"

import React from 'react';
import { Col, Row } from 'antd';
import { CardComponent } from './(dashboard)/components/CardComponent';
import TableComponent from './(dashboard)/components/TableComponent';


const App = () => {
  return (
    <div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>

      <TableComponent />
    </div>
  );
};
export default App;