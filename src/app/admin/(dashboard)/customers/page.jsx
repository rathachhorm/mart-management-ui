"use client"

import Link from 'next/link';
import React from 'react';
const App = () => {
    return (
        <>
            <h1>
                Customers page
            </h1>
            <Link href="/admin">to admin page</Link>
        </>
    );
};
export default App;