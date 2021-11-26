import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const UserDetails = () => {
    const [userData, setUserData] = useState(null)
    const {userid} = useParams()
    //userid es la  key que busco en los params de la url. Cuidado: es case sensitive! !=userId

    useEffect(() =>
        fetch(`http://jsonplaceholder.typicode.com/users/${userid}`)
            .then(response => response.json())
            .then(data => setUserData(data)), [userid]
    )

    return (
            <div>
                <h4>User id: {userid}</h4>
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
        )
}

export default UserDetails
