import styles from '../projects/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, description, cost, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total: </span> {cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button className={styles.btn} onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>

            </div>
        </div>
    )
}

export default ServiceCard