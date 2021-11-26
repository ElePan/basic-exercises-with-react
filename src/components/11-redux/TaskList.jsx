import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {completeTask} from "../../store/tasks/actions";

const TaskList = () => {
    const dispatch = useDispatch()

    const tasks = useSelector(state => state)
    //en este caso quiero devolver to do el estado (to do el array de tareas)

    const taskList = tasks.map(task => (
        <li key={task.id}
            style={{textDecoration: task.complete ? 'line-through' : 'none'}}
            onClick={() => dispatch(completeTask(task.id))}>>
            {task.title}
        </li>
    ))

    return(
        <div>
            <h3>Tasks</h3>
            <p>{taskList}</p>
        </div>
    )
}

export default TaskList
