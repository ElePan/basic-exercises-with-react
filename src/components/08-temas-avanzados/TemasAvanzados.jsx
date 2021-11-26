import {createContext, useState, Suspense, lazy} from "react";
import {SpinnerDotted} from "spinners-react"
import Intermedio from "./Intermedio";

/*  Un nodo raiz tiene un dato que necesitan otros.
    Creo consumidores que incluyan todos los componentes que necesitan leer un dato.
    Un provider incluye los componentes intermedios (donde deberia pasar el dato
    para llegar a quien lo necesita).
    Es suficiente el primero de cada "rama", ya que llama a los otros dentro.
    Un componente puede ser provider y consumidor a la vez.
*/

export const langCtx = createContext(null);
//provider y consumer tienen que estar en el contexto

const Perezoso = lazy(() => import('./PerezosoLazy'))

const TemasAvanzados = () => {

    const [lang, setLang] = useState('it')

    const selectLang = (event) => {
        setLang(event.target.value)
    }

    return (
        <div>
            <h2>Context API</h2>

            <select name="lang" id="lang" value={lang} onChange={selectLang}>
                <option value="es">ES</option>
                <option value="it">IT</option>
            </select>

            <langCtx.Provider value={lang}>
                <Intermedio/>
            </langCtx.Provider>

            <h2>Suspense y lazy mode</h2>
            <Suspense fallback={<SpinnerDotted color="blue"/>}>
                <Perezoso/>
            </Suspense>

        </div>
    )
}

export default TemasAvanzados
