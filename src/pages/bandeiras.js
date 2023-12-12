import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';
import Link from 'next/link';
function Bandeiras({ bandeira }) {
    return (
        <div className={styles.band}>
            <h1> Bandeiras </h1>
            {bandeira.map((bandeira, index) => (
                <div className={styles.bandd}><Link href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={bandeira.id}> <p> {bandeira.nome} </p> </div>
                </Link></div>
            ))
            }
        </div >
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
    const repo = await res.json()
    const bandeira = await repo;
    return {
        props: { bandeira }
    }
})
export default Bandeiras;