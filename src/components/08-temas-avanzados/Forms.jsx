import {useState} from "react";

const Forms = () => {
    const [name, setName] = useState('test')
    const [email, setEmail] = useState('test@test.it')
    const [password, setPassword] = useState('mypw')

    const registrar = (event) => {
        event.preventDefault()
        const data = {
            name: name,
            email:email,
            password: password
        }
        console.log(data)
    }

    return (
        <div>
            <h2>Formularios</h2>

            <form onSubmit={registrar}>
                <div>
                    <label htmlFor="username">User name</label>
                    <input type="text" id="username" name="username" value={name}
                            onChange={(event) => setName(event.target.value)}/>
                </div>
                <hr />
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <hr />
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Forms
