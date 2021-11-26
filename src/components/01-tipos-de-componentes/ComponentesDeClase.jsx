import React, {Component} from 'react';
//React import no es necesario por el "runtime": "automatic" de .babelrc

export default class ComponentesDeClase extends Component {
    //otra manera de hacer el export default
    constructor(props) {
        super(props);
        this.state = {
            enable: true,
            value: 6
        }
    }
    render() {
        return (
            <div>
                <p>Componente de clase</p>
                <p>Num: {this.state.value}</p>
                {/* Como utilizar los datos del estado */}
            </div>
        );
    }
}

