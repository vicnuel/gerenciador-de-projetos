import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'

import ProjectForm from '../projects/ProjectForm'

export default function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        // inicialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5001/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                // redirect to project page
                navigate(`/projects`, { state: { message: 'Projeto criado com sucesso' } })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newProject__container}>
            <h1>Criar projeto</h1>
            <p>crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}