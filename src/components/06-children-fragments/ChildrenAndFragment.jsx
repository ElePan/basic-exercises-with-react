import Button from "./Button";
import Accordion from "./Accordion";
import Sugus from "../02-propriedades/Sugus";
import {useState, Fragment} from "react";
import Carrousel from "./Carrousel";

const ChildrenAndFragment = () => {

    const [sugusArray] = useState([
        { id: 1, color: 'yellow', taste: 'limon' },
        { id:2, color: 'orange', taste: 'naranja' },
        { id:3, color: 'black', taste: 'special' }
    ])

    const sugusList = sugusArray.map(sugus => {
        return <Sugus color={sugus.color} taste={sugus.taste} key={sugus.id}/> })

    return (
        <Fragment>
        {/*los Fragments sostituyen los div que sono sirven para encapsular*/}
            <h2>Propriedad children y react fragments</h2>
            {/*<Button texto="botoncito"/>*/}
            {/* En ese caso paso por propriedad llamada texto el texto   */}
            <Button>botoncito</Button>
            {/* En ese caso el texto se pasa como propriedad "children"
              Tiene sentido cuando los componente aceptan varios datos diferentes - ej carrousel/accordion*/}
            <Accordion title="Titulo actual">
                {/*Entre los accordion el titulo no cambia -> lo paso como prop*/}
                <p>Primer parrafo: dfurwihfiwdjwdjriughijdirewuftroe</p>
                <p>Segundo parrafo: xeoijr droifrj kjojmooaa deoijroit xewjoir</p>
            </Accordion>

            <Accordion title="Mis sugus">
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    {sugusList}
                </div>
            </Accordion>

            <Carrousel>
                {sugusList}
            </Carrousel>
        </Fragment>
    )
}

export default ChildrenAndFragment
