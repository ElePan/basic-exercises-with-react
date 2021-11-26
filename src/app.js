import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
// el .jsx no es necesario ya que hay "resolve" en webpack config que lo intenta
import {BrowserRouter} from "react-router-dom";
//ese permite el reouting, lo queremos para toda la aplicacion entonces incluimos app en eso
import {Provider} from "react-redux";
import {getStore} from "./store/config-store";


//!!!!! esto es el primer archivo que se va a ejecutar

ReactDOM.render(
    <BrowserRouter>
        <Provider store={getStore()}>
            <App/>
            {/*Los componentes se pueden autocerrar, no es necesario poner <App></App>*/}
        </Provider>
    </BrowserRouter>, document.getElementById('root'))
//el orden de BrowserRouter y Provider da igual, lo que importa es que App este en ambos
