import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export default function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5001/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
        //console.log(project)
    }

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleCategory = (e) => {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do seu projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira a orçamento total do seu projeto"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                text="Categoria do projeto"
                name="category_id"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}