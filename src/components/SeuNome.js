export default function SeuNome({ setName }) {
    return (
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" name="nome" id="SeuNome" onChange={(e) => setName(e.target.value)} />
        </div>
    );
}