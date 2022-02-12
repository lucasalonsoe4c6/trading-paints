import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from '../styles/Card.module.css';

export default function Card({ car }) {
    const { title, drivername, users, bookmarks, car_make_name, dpic, pic, slink, dlink } = car;
    return (
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <div className={classes.cardHeader}>
                    <Link href={dlink}><Image src={dpic} width={32} height={32} /></Link>
                    <Link href={dlink}>{drivername}</Link>
                </div>
                <div className={classes.cardBody}>
                    <Link href={slink}>
                        <Image src={pic} height={206} width={300} layout="responsive" />
                    </Link>
                    <p className={classes.info}>{car_make_name}</p>
                    <Link href={slink}>
                        <h3>{title}</h3>
                    </Link>
                </div>
                <div className={classes.cardFooter}>
                    <div>🏁 {users}</div>
                    <div>★ {bookmarks}</div>
                </div>
            </div>
        </div>
    )
};