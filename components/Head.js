import Head from 'next/head'
import React from 'react'

export default function CustomHead() {
    return (
        <Head>
            <title>Trading paints</title>
            <link rel="icon" href="/logo.svg"/>
            <meta name="author" content="Lucas Alonso"/>
        </Head>
    )
}
