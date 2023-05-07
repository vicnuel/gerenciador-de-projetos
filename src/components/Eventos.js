function Evento({ eventType }) {

    function dispararEvento() {
        alert('Evento disparado!')
    }

    return (
        <div>
            <p>
                OnClick:
            </p>
            <button onClick={dispararEvento} >click</button>
        </div>
    )
}

export default Evento