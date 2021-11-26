import React, {useEffect, useState} from "react";
import {Link, Outlet, useSearchParams} from "react-router-dom";

const User = () => {
    const [usersData, setUsersData] = useState([])
    const [queryParams] = useSearchParams()
    //este hooks se usa para leer los query params

    useEffect( () => {
        let url ='http://jsonplaceholder.typicode.com/users'
        if(queryParams.has('limit')){
            url += `?_limit=${queryParams.get('limit')}`
        }
        fetch(url)
            .then(response => response.json())
            .then(data => setUsersData(data))}, [queryParams])


    const users= usersData.map(user => (
        <li key={user.id}>
            <span>{user.name}</span>
            <Link to={'/users/' + user.id}> Details </Link>
        </li>
    ))

    return (
        <div>
            <h3> User </h3>
            <ul>
                {users}
            </ul>

            <Outlet/>
            {/* donde hay esa etiqueta se pinta el contenido de la ruta anidada */}
        </div>
    )
}

export default User
