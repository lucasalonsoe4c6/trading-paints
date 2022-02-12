import React from 'react'
import CustomHead from './Head'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <div className="layout-container">
            <CustomHead />
            <Header />
            {children}
        </div>
    )
};