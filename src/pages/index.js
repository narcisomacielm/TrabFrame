import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
export default function Home() {
  return (
    <div>
      <Head>
        <title> Pelo Mundo! </title>
      </Head>
      <Navbar />
      <div className={styles.home}>
        <h1> Pelo Mundo!</h1>
        <main>
          <h2> Se você procura a descrição das bandeiras de todos os países do
            mundo e dos estados brasileiros, está no lugar certo!</h2>

        </main>
      </div>
      <Footer />
    </div>
  )
}
