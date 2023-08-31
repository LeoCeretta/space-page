import search from './search.png'
import logo from './logo.png'

import styles from './Header.module.scss'

export default function Header() {
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Space Page" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você está buscando?" />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}