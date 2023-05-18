import styles from './Home.module.css'
import savings from '../../img/savings.svg'

import LinkButton from '../layout/LinkButton'

export default function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao GP do <span>Vicnuel</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newProject" text="Criar projeto" />
            <img src={savings} alt="Gerenciador" />
        </section>
    )
} 