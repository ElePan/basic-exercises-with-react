import { jsx } from 'react/jsx-runtime'

const AppWithJsx = () => {
    //El nombre TIENE que empezar por mayuscula, lo diferencia de las etiquetas clasicas de HTML
    return jsx(
        //esta funcion equivale a la div de App.jsx
        'div', {
            id: 'main',
            children: jsx(
                'h1', {
                    className: 'titulo',
                    children: ['Hola mundo']
                }
            )
        }
    )
}
