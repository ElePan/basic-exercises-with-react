import { useState, useEffect } from "react"

export const useInput = (initialValue = '', validaciones = []) => {
    const [value, setValue] = useState(initialValue)
    const [errores, setErrores] = useState([])
    const [pristine, setPristine] = useState(true)

    useEffect(() => {
        if (!pristine) {
            const errors = []
            validaciones.forEach(val => {
                if (!val.regExp.test(value)) {
                    errors.push(val)
                }
            })
            setErrores(errors)
        }

        setPristine(false)
    }, [value])

    return [
        value,
        (event) => setValue(event.target.value),
        errores,
        errores.length === 0
    ]
}
