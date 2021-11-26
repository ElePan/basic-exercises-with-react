
const CmpB = (props) => {
    const cambiarNombre = (event) => {
        props.handleChangeName(event.target.value)
    }

    return (
        <div>
            <h3>Componente B</h3>
            <p>Name: {props.name}</p>
            <input type="text" value={props.name} onChange={cambiarNombre}/>
        </div>
    )
}

export default CmpB
