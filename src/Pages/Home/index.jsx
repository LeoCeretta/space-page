import Banner from "../../Componentes/Banner";
import Galeria from "Componentes/Galeria";
import Header from "Componentes/Header";
import Menu from "Componentes/Menu"
import Populares from "Componentes/Populares";
import Rodape from "Componentes/Rodape";

import styles from './Home.module.scss'

export default function Home() {
    return (
        <>
        <Header />
        <main>
            <section className={styles.principal}>
                <Menu />
                <Banner />
            </section>
            <div className={styles.galeria}>
                <Galeria />
                <Populares />
            </div>
        </main>
        <Rodape />
        </>
    )
}