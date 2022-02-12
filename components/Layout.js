import React from 'react'
import Aside from './Aside'
import CustomHead from './Head'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <div className="layout-container">
            <CustomHead />
            <Header />
            <Aside />
            {children}
        </div>
    )
};