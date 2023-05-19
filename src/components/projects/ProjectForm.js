import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export default function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([])

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

    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do seu projeto" />
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira a orçamento total do seu projeto" />
            <Select text="Categoria do projeto" name="category_id" options={categories} />

            <SubmitButton text={btnText} />
        </form>
    )
}