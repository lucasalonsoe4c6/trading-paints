import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Image src="/logo.svg" width={146} height={46} />
            </Link>
            <div className={classes.searchContainer}>
                <input
                    className={classes.searchInput}
                    placeholder="Search trading paints..."
                />
            </div>
            <div className={classes.links}>
                <Link href="/">Explore</Link>
                <Link href="/">Paint</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Create account</Link>
            </div>
        </header>
    )
};