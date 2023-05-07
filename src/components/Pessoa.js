function Pessoa(props) {
    return (
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.idade} anos</h2>
            <h3>{props.profissao}</h3>

        </div>
    );
}

function Pessoa2({ nome, idade, profissao }) {
    return (
        <div>
            <h1>{nome}</h1>
            <h2>{idade} anos</h2>
            <h3>{profissao}</h3>

        </div>
    );
}

export default Pessoa2;