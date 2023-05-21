import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from '../projects/ProjectCard';
import Loading from '../layout/Loading';

import styles from './Projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5001/projects', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    setProjects(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }, 200);
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5001/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        }).then(resp => resp.json())
            .then(() => {
                setProjects(projects.filter(project => project.id !== id))
                setProjectMessage("Projeto excluído com sucesso")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.projects_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Novo projeto" />
            </div>

            {message && <Message message={message} type="success" />}
            {projectMessage && <Message message={projectMessage} type="success" />}

            <Container>
                {projects.length > 0 &&
                    projects.map(project => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                {loading && <Loading />}
                {!loading && projects.length === 0 && <p>Nenhum projeto encontrado</p>}
            </Container>
        </div>
    )
}

export default Projects;