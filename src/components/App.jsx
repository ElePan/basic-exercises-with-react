//Los ficheros jsx sirven para prear componentes (estructuras complejas de DOM)

import TiposDeComponentes from "./01-tipos-de-componentes/TiposDeComponentes";
import Properties from "./02-propriedades/Properties";
import CondicionalesYListas from "./03-renderizados-condicional-y-listas/CondicionalesYListas";
import {EventosYEstados} from "./04-eventos-y-estados/EventosYEstados";
import Counter from "./04-eventos-y-estados/Counter";
import ComunicacionCmps from "./05-comunicacion-entre-componentes/ComunicacionCmps";
import ChildrenAndFragment from "./06-children-fragments/ChildrenAndFragment";
import ListaCocktails from "./07-useeffect-y-http/ListaCocktails";
import TemasAvanzados from "./08-temas-avanzados/TemasAvanzados";
import Forms from "./08-temas-avanzados/Forms";
import Router from "./10-router/Router";
import Redux from "./11-redux/Redux";
import React from "react";

const App = () => {
    //El nombre TIENE que empezar por mayuscula, lo diferencia de las etiquetas clasicas de HTML
    return (
        <div>
            <h1>Ejemplos</h1>
            {/*<Router/>*/}
            {/*<TiposDeComponentes />*/}
            {/*<Properties/>*/}
            {/*<CondicionalesYListas/>*/}
            {/*<EventosYEstados/>*/}
            {/*<Counter/>*/}
            {/*<ComunicacionCmps/>*/}
            {/*<ChildrenAndFragment/>*/}
            {/*<ListaCocktails/>*/}
            {/*<TemasAvanzados/>*/}
            {/*<Forms/>*/}
            <Redux/>
        </div>
    )
/*
Un componente puede devolver SOLO una etiqueta

return -> <div><h1>Hola mundo</h1><h2>yay</h2></div> OK div envuelve las otras
return -> <h1>Hola mundo</h1><h2>yay</h2> NO! h1 y h2 son dos etiquetas

 */
}

export default App
//si es default se importa sin llaves {}, si no lo lleva necesita {}
//UN SOLO export default por fichero
