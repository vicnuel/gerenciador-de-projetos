export default function Lista() {
    const lista = ['React', 'Vue', 'Angular', 'Svelte']

    return (
        <>
            <h3>Lista de coisas</h3>
            {
                lista.length > 0 ? (
                    lista.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                ) : (
                    <p>Não há itens na lista</p>
                )
            }
        </>
    )
}