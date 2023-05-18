import styles from './NewProject.module.css'

import ProjectForm from '../projects/ProjectForm'

export default function NewProject() {
    return (
        <div className={styles.newProject__container}>
            <h1>Criar projeto</h1>
            <p>crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar projeto" />
        </div>
    )
}