import Link from 'next/link';
import React, { useState } from 'react';
import classes from '../styles/Filters.module.css';

export default function Filters({ sort, setSort, ascending, setAscending }) {
    const [active, setActive] = useState('paints');

    const handleChange = (value) => {
        const direction = value.split('-')[0];
        setAscending(direction === 'asc');
        const newSort = value.split('-')[1];
        setSort(newSort);
    };

    return (
        <div className={classes.filters}>
            <nav className={classes.nav}>
                <Link href="/">
                    <p onClick={() => setActive('paints')} className={active === 'paints' ? classes.active : ''}>
                        Paints<span>327,490</span>
                    </p>
                </Link>
                <Link href="/">
                    <p onClick={() => setActive('collections')} className={active === 'collections' ? classes.active : ''}>
                        Collections<span>86,162</span>
                    </p>
                </Link>
                <Link href="/">
                    <p onClick={() => setActive('painter')} className={active === 'painter' ? classes.active : ''}>
                        Painter<span>31,038</span>
                    </p>
                </Link>
            </nav>
            <div className={classes.sort}>
                <span>Sort by</span>
                <select value={`${ascending ? 'asc' : 'desc'}-${sort}`} onChange={(e) => handleChange(e.target.value)}>
                    <option value="desc-popular">Trending</option>
                    <option value="desc-date">Date Listed: Newest</option>
                    <option value="asc-date">Date Listed: Oldest</option>
                    <option value="desc-users">Drivers Racing: Most</option>
                    <option value="asc-users">Drivers Racing: Fewest</option>
                    <option value="desc-bookmarks">Favorites: Most</option>
                    <option value="asc-bookmarks">Favorites: Fewest</option>
                </select>
            </div>
        </div>
    )
};