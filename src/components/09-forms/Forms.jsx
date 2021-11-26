import React, { useState, useEffect } from "react"
import { useInput } from "../../hooks/useInput"
import InputForm from "./InputForm"

const validacionesUsername = [
    { id: 'minLength', regExp: /[a-zA-Z]{4,}/, msg: 'El username tiene que tener como mínimo 4 letras' }
]
const validacionesEmail = [
    { id: 'emailConArroba', regExp: /[@]{1}/, msg: 'El email tiene que tener un @' },
    { id: 'emailConExtension', regExp: /\.(es|com)$/, msg: 'El email tiene que terminar con .es o .com' },
]

const Forms = () => {
    const [username, setUsername, erroresUsername, usernameValid] = useInput('', validacionesUsername)

    const [email, setEmail, erroresEmail, emailValid] = useInput('aaaa@aaa.es', validacionesEmail)

    const [password, setPassword] = useState('')

    const registrarUsuario = (event) => {
        event.preventDefault()
        const datosRegistro = {
            username,
            email,
            password,
        }

        console.log(datosRegistro)
        // POST /sign-up
    }

    return (
        <div>
            <h2>Formularios</h2>

            <form onSubmit={registrarUsuario}>
                <InputForm
                    id="username"
                    label="Username"
                    value={username}
                    onChange={setUsername}
                    valid={usernameValid}
                    errores={erroresUsername}
                />
                <InputForm
                    id="email"
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    valid={emailValid}
                    errores={erroresEmail}
                />


                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit">Sign Up</button>
            </form>

        </div>
    )
}

export default Forms
