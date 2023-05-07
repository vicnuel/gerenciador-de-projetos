import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.links} to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.links} to="/estudo">Estudo</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar