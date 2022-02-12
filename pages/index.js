import Aside from "../components/Aside";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Layout from "../components/Layout";
import classes from '../styles/Home.module.css';

export default function Home() {
    return (
        <Layout>
            <Aside />
            <Filters />
            <main className={classes.main}>
                <div className={classes.grid}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </Layout>
    )
};