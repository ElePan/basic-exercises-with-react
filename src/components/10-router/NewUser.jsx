import {useNavigate} from "react-router-dom";

const NewUser = () => {
    const navigate = useNavigate()
    //hooks en componentes SIEMPRE al principio, no en funciones/if/for

    const saveData= () => {
        setTimeout(() => console.log("saved"), 1500)
        navigate('/', {replace:true})
    }

    return (
        <div>
            <h3>New User</h3>
            <button type="button" onClick={saveData}>Create user</button>

        </div>
    )
}

export default NewUser
