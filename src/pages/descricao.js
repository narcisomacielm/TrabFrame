import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
export default function Home() {
    return (
        <div>
            <Head>
                <title> Descrição </title>
            </Head>
            <Navbar />
            <div className={styles.descricao}>

            </div>
            <Footer />
        </div>
    )
}
