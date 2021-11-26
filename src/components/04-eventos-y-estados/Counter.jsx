import {useState} from "react";

const Counter = () => {
    const [cuenta, setCuenta] = useState(0)
    const decrementar = () => {
        if (cuenta !== 0) {
            setCuenta(cuenta -1)
        }}
    const incrementar = () => {setCuenta(cuenta +1)}
    const cambiarCuenta = (event) => {setCuenta(Number(event.target.value))}

    return (
        <div>
            <h2>Eventos y estados</h2>
            <button type="button" onClick={decrementar}>-</button>
            <span>Cuenta: {cuenta}</span>
            <button type="button" onClick={incrementar}>+</button>
            {/* detectar un click (onClick) para lanzar una funcion (pongo referencia a la funcion) */}
            <input type="number" value={cuenta} onChange={cambiarCuenta}/>
        </div>
    )
}

export default Counter
