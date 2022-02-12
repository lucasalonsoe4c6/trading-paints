import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
// Components
import Aside from "../components/Aside";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Layout from "../components/Layout";
import LoadingIcon from "../components/LoadingIcon";
// Styles
import classes from '../styles/Home.module.css';
// Const
import { basicURL } from "../const/basicURL";
import { GlobalContext } from "../context/GlobalState";

export default function Home(props) {
    const [cars, setCars] = useState(props.cars);
    const [loading, setLoading] = useState(false);
    const [newItemsLoading, setNewItemsLoading] = useState(false);

    const { search } = useContext(GlobalContext);
    const firstRender = useRef(true);

    const [ascending, setAscending] = useState(false);
    const [sort, setSort] = useState('popular');
    const [reuse, setReuse] = useState(1);
    const [hasNumber, setHasNumber] = useState(true);
    const [from, setFrom] = useState('everyone');
    const [pos, setPos] = useState(0);

    useEffect(() => {
        if (firstRender.current) return firstRender.current = false;

        setLoading(true);
        const url = `${basicURL}type=All&sort=${sort}&ad=${ascending ? 'ASC' : 'DESC'}&pos=0&${search === '' ? 'search=' : `search=${search}`}&reuse=${reuse}&family=1&hasNumber=${hasNumber ? 1 : 0}&from=everyone&stampednums=1`;
        axios.get(url)
            .then(({ data }) => {
                setCars(data.output.cars);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [ascending, sort, reuse, hasNumber, from, search]);

    useEffect(() => {
        if (firstRender.current) return firstRender.current = false;
        if (pos === 0) return;
        setNewItemsLoading(true);
        const url = `${basicURL}type=All&sort=${sort}&ad=${ascending ? 'ASC' : 'DESC'}&pos=${pos}&${search === '' ? 'search=' : `search=${search}`}&reuse=${reuse}&family=1&hasNumber=${hasNumber ? 1 : 0}&from=everyone&stampednums=1`;
        axios.get(url)
            .then(({ data }) => {
                setCars([...cars, ...data.output.cars]);
                setNewItemsLoading(false);
            })
            .catch(err => console.log(err));
    }, [pos])

    useEffect(() => {
        console.log(cars);
    }, [cars])

    return (
        <Layout>
            <Aside hasNumber={hasNumber} setHasNumber={setHasNumber} reuse={reuse} setReuse={setReuse} from={from} setFrom={setFrom} />
            <Filters sort={sort} setSort={setSort} ascending={ascending} setAscending={setAscending} />
            <main className={classes.main}>
                <div className={classes.grid}>
                    {loading ?
                        <LoadingIcon />
                        :
                        cars.map(car => (
                            <Card key={`${car.id}${car.userId}`} car={car} />
                        ))
                    }
                </div>
                {newItemsLoading ?
                    <LoadingIcon />
                    :
                    <div className={classes.buttonContainer}>
                        <button className={classes.button} onClick={() => setPos(pos + 1)}>Show more</button>
                    </div>
                }
            </main>
        </Layout>
    )
};

export async function getStaticProps() {
    const initialURL = `${basicURL}type=All&sort=popular&ad=DESC&pos=0&search=&reuse=1&family=1&hasnumber=1&from=everyone&stampednums=1`;
    try {
        const response = (await axios.get(initialURL)).data;
        return {
            props: {
                cars: response.output.cars
            },
            revalidate: 60
        }
    }
    catch (err) {
        console.log(err)
        return {
            props: {
                cars: []
            }
        }
    }
};