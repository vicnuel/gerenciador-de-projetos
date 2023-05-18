import { Link } from "react-router-dom"

import Container from './Container'

import logo from '../../img/costs_logo.png'

import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Container>
                <Link to="/"><img className={styles.logo} src={logo} alt="Costs" /></Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link className={styles.links} to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.links} to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.links} to="/contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.links} to="/company">Empresa</Link>
                    </li>
                    {/* <li className={styles.item}>
                        <Link className={styles.links} to="/newproject">Novo Projeto</Link>
                    </li> */}
                </ul>
            </Container>
        </nav>
    );
}

export default NavBar