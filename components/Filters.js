import Link from 'next/link';
import React from 'react';
import classes from '../styles/Filters.module.css';

export default function Filters() {
    return (
        <div className={classes.filters}>
            <nav className={classes.nav}>
                <Link href="/"><p>Paints<span>327,490</span></p></Link>
                <Link href="/"><p>Collections<span>86,162</span></p></Link>
                <Link href="/"><p>Painter<span>31,038</span></p></Link>
            </nav>
            <div className={classes.sort}>
                <span>Sort by</span>
                <select>
                    <option>Trending</option>
                    <option>Date Listed: Newest</option>
                    <option>Date Listed: Oldest</option>
                    <option>Drivers Racing: Most</option>
                    <option>Drivers Racing: Fewest</option>
                    <option>Favorites: Fewest</option>
                    <option>Favorites: Most</option>
                </select>
            </div>
        </div>
    )
};