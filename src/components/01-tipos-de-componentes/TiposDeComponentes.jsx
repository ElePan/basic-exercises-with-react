/*
de clase = es una clase y de funcionales = es una funcion (preferible desde react 16,8)


Antes: la clase tenia estado (el this), las funciones no.
Si necesitabamos datos/estado se usaba lo de clase, todas las otras veces funcion (ejemplo
si recibo dato desde el exterior)

React Hooks: funciones con estado, van sostituyendo los componentes de clase
*/

import ComponentesDeClase from "./ComponentesDeClase";

export const ComponenteFuncional = () => {

    return (
            <div>
                <h2>Componente funcional</h2>
            </div>
        )

}

const TiposDeComponentes = () => {

    const text = 'Componente funcional'

    return (
        <div>
            <h2>Tipos de componentes</h2>
            <p>{text}</p>
            <ComponentesDeClase />
        </div>
    )

}

export default TiposDeComponentes
