import CmpA from "./CmpA";
import CmpB from "./CmpB";
import {useState} from "react";

const ComunicacionCmps = () => {

    const [name, setName] = useState('Elena')

    return (
        <div>
            <h2>Comunicacion entre componentes</h2>
            <CmpA name={name}/>
            <CmpB name={name} handleChangeName={setName}/>
        </div>
    )
}

export default ComunicacionCmps
