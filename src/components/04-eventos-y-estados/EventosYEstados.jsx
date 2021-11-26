

export const EventosYEstados = () => {
    //las propriedades no se pueden cambiar (read only), es estado es posible cambiarlo (creando uno nuevo)

    const mostrarMensaje = (event) => { console.log('Hola!', event) }
    //las funciones reciben el evento que se ha ejecutado como input
    const logged = true;

    return (
        <div>
            <h2>Eventos y estados</h2>
            <button type="button" onClick={mostrarMensaje}>Lee aqui</button>
            {/* detectar un click (onClick) para lanzar una funcion (pongo referencia a la funcion) */}
        </div>
    )
}
