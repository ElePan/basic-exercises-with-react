import {useEffect, useState} from "react";

const ListaCocktails = () => {
    const [filter, setFilter] = useState('margarita')
    const [cocktails, setCocktails] = useState([])
    const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null)

    useEffect( () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`)
            .then(response => response.json())
            .then(datos => setCocktails(datos.drinks))}, [filter])
    //lista de dependencias vacia [] -> se ejecuta solo una vez cuando se crea la lista

    const listaCocktails = cocktails.map(cocktail =>
        <li key={cocktail.idDrink} onClick={() => setCocktailSeleccionado(cocktail)}>
            {cocktail.strDrink}
        </li>)

    const filtrar = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <h2>useEffect y http</h2>
            <input type="text" value={filter} onChange={filtrar}/>
            <ul>
                {listaCocktails}
            </ul>

            <hr  />

            {cocktailSeleccionado !== null ?
                <pre >{JSON.stringify(cocktailSeleccionado, null, 2)}
                </pre> : 'Selecciona un cockail para ver aqui la informacion'
            }
        </div>
    )
}

export default ListaCocktails
