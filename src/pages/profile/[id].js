import styles from '../../styles/Pages.module.css';

function Bandeiras({ bandeira = {} }) {
    return (
        <div className={styles.nominhos}>

            <p>{bandeira.nome}</p>
            <p>{bandeira.usuario}</p>
            <p>{bandeira.descricao}</p>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
    const repo = await res.json()
    const bandeira = await repo[context.params.id];
    return {
        props: { bandeira }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
    const repo = await res.json()
    const bandeiras = await repo;
    const paths = bandeiras.map((bandeira, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Bandeiras;
