import {Routes, Route, Link, Navigate} from 'react-router-dom'
import {isAuthenticated} from "../../utils/auth";
import User from "./User";
import NewUser from "./NewUser";
import Error from "./Error";
import UserDetails from "./UserDetails";
import React from "react";

const Router = () => {

    return (
        <div>
            <h2>React Router v6</h2>
            <ul>
                <li>
                    {/*Link visualiza la palabra, si pinchas va a la ruta del to*/}
                    <Link to="/">Users</Link>
                    {/* link reutiliza el html y el bundle js y pinta solo los cambios */}
                </li>
                <li>
                    <Link to="/new-user">NewUsers</Link>
                </li>
            </ul>

            {/*    en ese componente (Routes) ponemos todas las rutas,
            si mas expresiones regulares coiciden con una ruta usa la mas exacta (y solo una).
            No importa el orden en el cual estan definidas */}
            <Routes>
                {/*Un componente Route por cada ruta de mi app*/}
                {/* crea esa ruta y al entrar pinta new user */}

                {isAuthenticated() && <Route path='/new-user' element={<NewUser/>}/>}
                {/*Guard: es una condicion que se verifica antes del route (isAuthenticated en este caso) */}

                <Route path='/' element={<Navigate to='/users' replace={true}/>}/>
                {/*Uso el Navigate para hacer un redirect*/}

                <Route path='/users' element={<User/>}>
                    <Route path=':userid' element={<UserDetails/>}/>
                    {/* rutas anidadas: el resultado final el users/:userid   */}
                </Route>
                <Route path='*' element={<Error/>}/>
                {/* todas las rutas que no se encuentran caen en e path '*' */}
            </Routes>
        </div>
    )
}

export default Router
