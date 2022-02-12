import React from 'react'
import classes from '../styles/LoadingIcon.module.css';
import Image from 'next/image';

export default function LoadingIcon() {
    return (
        <div className={classes.loadingIcon}>
            <Image src="/loading.svg" width={150} height={150} />
        </div>
    )
}