import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from '../styles/Card.module.css';

export default function Card({ link, author, authorImage, title, image }) {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <div className={classes.cardHeader}>
                    <Link href="/"><Image src="/driver.jpg" width={32} height={32} /></Link>
                    <Link href="/">Front Row Motorsports</Link>
                </div>
                <div className={classes.cardBody}>
                    <Image src="/car.jpg" height={206} width={300} layout="responsive"/>
                    <p className={classes.info}>ARCA Menards Chevrolet Impala SS</p>
                    <h3>1985 Electrifying NASCAR Xfinity Series Version 2 </h3>
                </div>
                <div className={classes.cardFooter}>
                    <div>🏁 121</div>
                    <div>★ 176</div>
                </div>
            </div>
        </div>
    )
};