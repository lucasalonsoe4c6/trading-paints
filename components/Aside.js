import React, { useState } from 'react';
import classes from '../styles/Aside.module.css';

export default function Aside({ hasNumber, setHasNumber }) {
    const [filtersOpen, setFiltersOpen] = useState({ number: true, vehicle: false, from: false, available: false });
    
    return (
        <aside className={classes.aside}>
            <div className={classes.filter}>
                <span>Number</span>
                <span
                    className={`${filtersOpen.number ? classes.close : classes.open}`}
                    onClick={() => setFiltersOpen({ ...filtersOpen, number: !filtersOpen.number })}
                >+</span>
            </div>
            {filtersOpen.number &&
                <div className={classes.options}>
                    <div>
                        <input type="checkbox" checked={!hasNumber} onChange={() => setHasNumber(!hasNumber)}/>
                        <span>Sim-Stamped Number</span>
                    </div>
                    <div>
                        <input type="checkbox" checked={hasNumber} onChange={() => setHasNumber(!hasNumber)}/>
                        <span>Custom Number</span>
                    </div>
                </div>
            }
            <div className={classes.filter}>
                <span>Vehicle</span>
                <span
                    className={`${filtersOpen.vehicle ? classes.close : classes.open}`}
                    onClick={() => setFiltersOpen({ ...filtersOpen, vehicle: !filtersOpen.vehicle })}
                >+</span>
            </div>
            <div className={classes.filter}>
                <span>From everyone</span>
                <span
                    className={`${filtersOpen.from ? classes.close : classes.open}`}
                    onClick={() => setFiltersOpen({ ...filtersOpen, from: !filtersOpen.from })}
                >+</span>
            </div>
            <div className={classes.filter}>
                <span>Availabilty</span>
                <span
                    className={`${filtersOpen.avalabilty ? classes.close : classes.open}`}
                    onClick={() => setFiltersOpen({ ...filtersOpen, avalabilty: !filtersOpen.avalabilty })}
                >+</span>
            </div>
        </aside>
    )
};