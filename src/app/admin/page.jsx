"use client"

import Link from 'next/link';
import React from 'react';
const App = () => {
  return (
    <>
      <h1>
        Admin page
      </h1>
      <Link href="/admin/test">to test page</Link>
    </>
  );
};
export default App;