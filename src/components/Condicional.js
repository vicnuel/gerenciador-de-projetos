import { useState } from "react"
import Button from "./Button"

function Condicional({ children, ...restProps }) {

    const [logged, setLogged] = useState(false)

    function login() {
        setLogged(true)
    }

    function logout() {
        setLogged(false)
    }

    return (
        <>
            {
                logged ?
                    <Button onClick={logout}>Logout</Button>
                    :
                    <Button onClick={login}>Login</Button>
            }
        </>
    )
}

export default Condicional