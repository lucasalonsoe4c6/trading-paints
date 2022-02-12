import React, { useState } from 'react';
import classes from '../styles/Aside.module.css';

export default function Aside({ cars, type, setType, hasNumber, setHasNumber, reuse, setReuse, from, setFrom }) {
    const [filtersOpen, setFiltersOpen] = useState({ number: true, vehicle: false, from: false, availability: false });

    const getUniqueElements = (array) => {
        const seen = {};
        return array.filter((item) => {
            return seen.hasOwnProperty(item.car_make) ? false : (seen[item.car_make] = true);
        });
    }

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
                        <input type="checkbox" checked={!hasNumber} onChange={() => setHasNumber(!hasNumber)} />
                        <span>Sim-Stamped Number</span>
                    </div>
                    <div>
                        <input type="checkbox" checked={hasNumber} onChange={() => setHasNumber(!hasNumber)} />
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
            {filtersOpen.vehicle &&
                <div className={classes.options}>
                    <div>
                        <input type="checkbox" checked={type === 'All'} onChange={() => setType('All')} />
                        <span>All</span>
                    </div>
                    {getUniqueElements(cars).map((car) => (
                        <div key={car.id}>
                            <input type="checkbox" checked={type === car.car_make} onChange={() => setType(car.car_make)} />
                            <span>{car.car_make_name}</span>
                        </div>
                    ))}
                </div>
            }
            <div className={classes.filter}>
                <span>From everyone</span>
                <span
                    className={`${filtersOpen.from ? classes.close : classes.open}`}
                    onClick={() => setFiltersOpen({ ...filtersOpen, from: !filtersOpen.from })}
                >+</span>
            </div>
            {filtersOpen.from &&
                <div className={classes.options}>
                    <div>
                        <input type="checkbox" checked={from === 'everyone'} onChange={() => setFrom('everyone')} />
                        <span>Everyone</span>
                    </div>
                    <div>
                        <input type="checkbox" checked={from === 'following'} onChange={() => setFrom('following')} />
                        <span>Following</span>
                    </div>
                </div>
            }
            <div className={classes.filter}>
                <span>Availability</span>
                <span
                    className={`${filtersOpen.avalabilty ? classes.close : classes.open}`}
                    onClick={() => setFiltersOpen({ ...filtersOpen, availability: !filtersOpen.availability })}
                >+</span>
            </div>
            {filtersOpen.availability &&
                <div className={classes.options}>
                    <div>
                        <input type="checkbox" checked={reuse} onChange={() => setReuse(!reuse)} />
                        <span>Available to race</span>
                    </div>
                </div>
            }
        </aside>
    )
};