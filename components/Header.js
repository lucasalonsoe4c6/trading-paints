import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../styles/Header.module.css';
import { GlobalContext } from '../context/GlobalState';

export default function Header() {
    const { search, setSearch } = useContext(GlobalContext);
    const [value, setValue] = useState('');

    let typingTimer;

    const onKeyUp = (value) => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => setSearch(value), 1000);
    };

    const onKeyDown = () => {
        clearTimeout(typingTimer)
    };

    return (
        <header className={classes.header}>
            <Link href="/">
                <Image src="/logo.svg" width={146} height={46} />
            </Link>
            <div className={classes.searchContainer}>
                <input
                    className={classes.searchInput}
                    placeholder="Search trading paints..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyUp={(e) => onKeyUp(e.currentTarget.value)}
                    onKeyDown={() => onKeyDown()}
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