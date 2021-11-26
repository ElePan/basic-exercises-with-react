import {useState} from "react";

const Carrousel = (props) => {
    const [element, setElement] = useState(0)

    const anterior  = () => {
        if (element > 0) {
            setElement(element - 1)
        }
        else {
            setElement(props.children.length -1)
        }

    }
    const posterior  = () => {
        if ( element < props.children.length -1){
            setElement(element + 1)
        }
        else {
            setElement(0)
        }
    }

    return (
        <div>
            <button type="button" onClick={anterior}>{'<'}</button>
                {props.children[element]}
            <button type="button" onClick={posterior}>{'>'}</button>
        </div>
    )
}

export default Carrousel
