import {isAuthenticated} from "../../utils/auth";
import Sugus from "../02-propriedades/Sugus";

const CondicionalesYListas = () => {

    const logged = true;
    const sugusArray = [
        { id: 1, color: 'yellow', taste: 'limon' },
        { id:2, color: 'orange', taste: 'naranja' },
        { id:3, color: 'black', taste: 'special' }
    ]

    const sugusList = sugusArray.map(sugus => {
        return <Sugus color={sugus.color} taste={sugus.taste} key={sugus.id}/> })
    //key es la propriedad "default" que busca react para pintar listas (tiene que ser unico)
    // El orden en el que pinta  es el del array que pasamos

    return (
        <div >
            <h2>Renderizado condicional y listas</h2>

            {logged ? <button>Logout</button> : <button>Login</button>}
            {/*    se usan los ternarios como if/else*/}
            {logged ? <p>Tu area personal</p> : null}
            {isAuthenticated() && <p>Bienvenido!</p>}
            {/* las ultimas dos lineas son equivalente */}

            {sugusList}

        </div>
    )
}

export default CondicionalesYListas
