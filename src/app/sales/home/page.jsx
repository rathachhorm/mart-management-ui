"use client"

import Link from 'next/link';
import React from 'react';
const App = () => {
  return (
    <>
      <h1>
        Home page
      </h1>
      <Link href="/sale/test">to test page</Link>
    </>
  );
};
export default App;