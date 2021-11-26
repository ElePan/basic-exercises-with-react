//redux es una libreria que gestiona el estado en app grandes, alternativa a context api (nativo)
import Form from "./Form";
import TaskList from "./TaskList";
import React from "react";

const Redux = () => {
    return(
        <div>
            <h2>Redux</h2>
            <Form/>
            <TaskList/>
        </div>
    )

}

export default Redux
