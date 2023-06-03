import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { parse, v4 as uuidv4 } from 'uuid'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'

import ProjectForm from '../projects/ProjectForm'

import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

import styles from './Project.module.css'

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState({})
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5001/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setProject(data)
                    setServices(data.services)
                })
                .catch(err => console.log(err))
        }, 200)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function handleRemoveService(id) { }

    function createService() {
        setMessage()

        //last service
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        // maximum validation
        if (newCost > parseFloat(project.budget)) {

            //mensagem
            setMessage("O valor de orçamento não pode ser menor que o valor de custo")
            setType("erro")
            project.services.pop()

            setTimeout(() => {
                setMessage()
                setType()
            }, 3000)

            return false
        }

        // add service cost to project total cost
        project.cost = newCost

        // update project
        fetch(`http://localhost:5001/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(rest => rest.json())
            .then(data => {
                // exibir serviço
                setShowServiceForm(false)
            })
            .catch(err => console.log(err))
    }

    function ediPost(project) {

        //setMessage("")
        // budget validation
        if (project.budget < project.cost) {
            //mensagem
            setMessage("O valor de orçamento não pode ser menor que o valor de custo")
            setType("erro")

            setTimeout(() => {
                setMessage()
                setType()
            }, 3000)
            return false
        }

        fetch(`http://localhost:5001/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                setProject(data)
                setShowProjectForm(false)
                toggleProjectForm()
                //mensagem
                setMessage("Projeto atualizado com sucesso")
                setType("success")
                setTimeout(() => {
                    setMessage()
                    setType()
                }, 3000)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                project.name ? (
                    <div className={styles.project_details}>
                        <Container customClass="column">
                            {message && <Message type={type} message={message} />}
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
                                            <ProjectForm
                                                handleSubmit={ediPost}
                                                btnText="Salvar alterações"
                                                projectData={project}
                                            />
                                        </div>
                                    )
                                }
                            </div>

                            <div className={styles.service_form_container}>
                                <h2>Adicione um serviço</h2>
                                <button className={styles.btn} onClick={toggleServiceForm}>
                                    {
                                        !showServiceForm ? "Adicionar serviço" : "Fechar"
                                    }
                                </button>

                                <div className={styles.project_info}>
                                    {

                                        showServiceForm &&
                                        (
                                            <ServiceForm
                                                handleSubmit={createService}
                                                btnText="Adicionar serviço"
                                                projectData={project}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                            <h2>Serviços</h2>
                            <Container customClass="start">
                                {
                                    services.length > 0 &&

                                    services.map(service => (
                                        <ServiceCard
                                            id={service.id}
                                            name={service.name}
                                            description={service.description}
                                            cost={service.cost}
                                            key={service.id}
                                            handleRemove={handleRemoveService}
                                        />
                                    ))
                                }
                                {
                                    services.length === 0 &&
                                    <p>Não há serviços cadastrados</p>

                                }




                            </Container>

                        </Container>
                    </div>
                ) : (<Loading />)
            }

        </>
    )
}

export default Project