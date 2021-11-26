import {useState} from "react";
import './Accordion.css'
const Accordion = (props) => {

    const [isVisible, setVisible] = useState(false)

    const cambiarValor = () => {
        setVisible(!isVisible)
    }

    return (
        <div className="accordion">
            <h3>Accordion</h3>
            <div className="accordion-heading" onClick={cambiarValor}> {props.title} </div>
            <div className={isVisible ? 'accordion-content visible' : 'accordion-content not-visible'}>
                {props.children}
            </div>
        </div>
    )
}

export default Accordion
