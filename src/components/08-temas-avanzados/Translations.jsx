import {langCtx} from "./TemasAvanzados";
import {useContext} from "react";
import {translate} from "../../utils/translations";

const Translations = () => {

    const lang = useContext(langCtx)
    return (
         <div>
             <p>{translate('Quiero ser traducido', lang)}</p>
             {/*<langCtx.Consumer>{(lang) => { return <p>Quiero ser traducido</p>}} </langCtx.Consumer>*/}
             {/* alternativa "manual" a useContext*/}
         </div>
    )
}

export default Translations
