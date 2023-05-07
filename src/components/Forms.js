import { useState } from 'react'

export default function Form() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrando usuário ' + name)
    }


    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        id='name'
                        name='name'
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}