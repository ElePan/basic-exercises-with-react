import PropTypes from 'prop-types'
import './Sugus.css'
const Sugus = (props) => {
    const styles = {
        envoltorio: {
            backgroundColor: props.color
        }
    }
    return (
        <div className="sugus" style={styles.envoltorio}>
            {/*los estilos en linea tienen prioridad respeto al css si hay incongruencias */}
            <p>{props.taste}</p>
        </div>
    )
}
Sugus.defaultProps = {
    color: "black",
    taste: "surprise"
}

Sugus.propTypes = {
//    valida las propriedades que llegan - usa la lib "props-types"
    taste: PropTypes.string,
    //controla que sea string y que se relleno (siempre ya que si no lo hay coge el default)

    color: function (props, propName) {
        switch (props['taste']) {
            case 'limon':
                return props[propName] === 'yellow' ? null : new Error('tiene que ser amarillo')
            case 'naranja':
                return props[propName] === 'orange' ? null : new Error('tiene que ser naranja')
            case 'special':
                return props[propName] === 'black' ? null : new Error('tiene que ser negro')
        }

    }
}

export default Sugus
