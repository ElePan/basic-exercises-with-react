import Sugus from "./Sugus";

const Properties = () => {
    return (
        <div>
            <h2>Propriedades</h2>
            <Sugus color="orange" taste="naranja"/>
            {/*color y taste son propriedades, se leen en Sugus como props.color etc*/}
            <Sugus color="yellow" taste="limon"/>
            <Sugus color="orange" taste="limon"/>
            {/*Da warning en la consola ya que las validaciones piden limon en yellow*/}
            <Sugus/>
            {/* in this case it use default values */}
        </div>
    )
}

export default Properties
