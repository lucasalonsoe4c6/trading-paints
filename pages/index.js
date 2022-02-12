import Card from "../components/Card";
import Layout from "../components/Layout";
import classes from '../styles/Home.module.css';

export default function Home() {
    return (
        <Layout>
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