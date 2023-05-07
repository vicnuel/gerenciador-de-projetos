import { useState } from "react";

import SayMyName from "./SayMyName"
// import Pessoa from "./Pessoa";
import Pessoa2 from "./Pessoa"
import styles from './Anotacoes.module.css'
import Item from "./Item"
import Evento from "./Eventos"
import Form from "./Forms"
import Button from "./Button"
import Condicional from "./Condicional"
import Lista from "./Lista"
import SeuNome from "./SeuNome";
import { FaBeer } from 'react-icons/fa'

function Anotacoes() {

    function dispararEvento() {
        alert('Evento disparado!')
    }

    // State Lift
    const [name, setName] = useState('Victor')

    return (
        <>
            <h1 className={styles.title}>Anotações</h1>
            <p>Esta é a página de anotações</p>
            <br />
            <br />
            <h2>JSX</h2>
            <p>JSX é uma extensão da linguagem JavaScript. Com ela é possível escrever HTML dentro do JavaScript.</p>
            <p>Para isso, é necessário importar o React no arquivo que será escrito o JSX.</p>
            <p>Exemplo:</p>
            <p>import React from 'react';</p>
            <p>import ReactDOM from 'react-dom';</p>
            <p>import './index.css';</p>
            <h2 className={styles.subtitle}>Components</h2>
            <p>Components são funções que retornam HTML.</p>
            <p>Para usar um component, é necessário importá-lo no arquivo que será usado.</p>
            <p>Exemplo:</p>
            <p>import HelloWorld from './components/helloworld';</p>

            <h2 className={styles.subtitle}>Props</h2>
            <p>Props são parâmetros que podem ser passados para um component.</p>
            <p>Exemplo:</p>
            <p>function HelloWorld(props) {`{ }`}</p>
            <SayMyName name="Victor" />
            <Pessoa2 nome="Victor" idade="17" profissao="Desenvolvedor" />

            <h2 className={styles.subtitle}>CSS</h2>
            <p>Para usar CSS, é necessário importar o arquivo CSS no arquivo que será usado.</p>
            <h3>css modules</h3>
            <p>Para usar css modules, é necessário criar um arquivo CSS com o mesmo nome do arquivo que será usado.</p>
            <p>Exemplo:</p>
            <p>App.js</p>
            <p>App.css</p>

            <h2 className={styles.subtitle}>React Fragments</h2>
            <p>React Fragments são utilizados para retornar mais de um elemento HTML.</p>
            <p>{'<> </>'}</p>

            <h2 className={styles.subtitle}>Prop Types</h2>
            <p>Prop Types são utilizados para definir o tipo de dado que uma propriedade deve receber.</p>
            <p>Exemplo:</p>
            <p>import PropTypes from 'prop-types';</p>
            <Item name="Sacolé" description="Descrição do item 1" price={10} />

            <h2 className={styles.subtitle}>React Events </h2>
            <p>React Events são utilizados para executar uma função quando um evento ocorrer.</p>
            <p>Tipos:</p>
            <Evento /> {/* <Evento eventType="onClick" /> */}
            <p onChange={dispararEvento}>onChange</p> { }
            <p onMouseOver={dispararEvento}>onMouseOver</p>
            {/* <p onMouseOut={dispararEvento}>onMouseOut</p> */}
            {/* <p onFocus={dispararEvento}>onFocus</p> */}

            <br /> <br />

            {/* <Form /> */}

            <h2 className={styles.subtitle}>UseState</h2>
            <p>UseState é um hook que permite adicionar estado a um componente funcional.</p>

            <Form />

            <h2 className={styles.subtitle}>Métodos por props</h2>
            <p>É possível passar métodos por props para um componente.</p>
            <p>Exemplo:</p>
            <Button onClick={dispararEvento}>Ativar</Button>

            <h2 className={styles.subtitle}>Renderização por condição</h2>
            <p>É possível renderizar um componente por condição.</p>
            <p>Exemplo:</p>
            <p></p>
            <Condicional />

            <h2 className={styles.subtitle}>Renderizando listas</h2>
            <p>É possível renderizar listas de elementos.</p>
            <p>Exemplo:</p>
            <Lista />

            <h2 className={styles.subtitle}>State Lift</h2>
            <p>State Lift é uma técnica que permite que um componente pai controle o estado de um componente filho.</p>
            <p>Exemplo:</p>
            <SeuNome setName={setName} />
            <SayMyName name={name} />

            <h2 className={styles.subtitle}>React Router</h2>
            <p>React Router é uma biblioteca que permite criar rotas em uma aplicação React.</p>
            <p>Exemplo:</p>
            .
            <p>Importar:</p>
            <p>import {`{ BrowserRouter as Router, Routes, Route }`} from 'react-router-dom';</p>
            <p>Instalar:</p>
            <p>npm install react-router-dom</p>

            <h2 className={styles.subtitle}>React Icons</h2>
            <p>React Icons é uma biblioteca que permite usar ícones em uma aplicação React.</p>
            <p>Exemplo:</p>
            <FaBeer />
            <p>Importar:</p>
            <p>import {`{ FaBeer }`} from 'react-icons/fa';</p>
            <p>Instalar:</p>
            <p>npm install react-icons --save</p>
        </>
    );
}

export default Anotacoes;