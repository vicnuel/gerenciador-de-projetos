import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

import styles from './Project.module.css'

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState({})
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5001/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => setProject(data))
                .catch(err => console.log(err))
        }, 200)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {
                project.name ? (
                    <div className={styles.project_details}>
                        <Container customClass="column">
                            <div className={styles.details_container}>
                                <h1>Projeto: {project.name}</h1>
                                <button className={styles.btn} onClick={toggleProjectForm}>
                                    {
                                        !showProjectForm ? "Editar projeto" : "Fechar"
                                    }
                                </button>
                                {
                                    !showProjectForm ? (
                                        <div className={styles.project_info}>
                                            <p>
                                                <span>Categoria:</span> {project.category.name}
                                            </p>
                                            <p>
                                                <span>Total de orçamento:</span> R$ {project.budget}
                                            </p>
                                            <p>
                                                <span>Total utilizado:</span> R$ {project.cost}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className={styles.project_info}>
                                            <p>detalhes do projeto</p>
                                        </div>
                                    )
                                }
                            </div>
                        </Container>
                    </div>
                ) : (<Loading />)
            }

        </>
    )
}

export default Project