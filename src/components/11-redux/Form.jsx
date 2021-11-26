import React, {useState} from "react";
import {useInput} from "../../hooks/useInput";
import {addTask} from "../../store/tasks/actions";
import {useDispatch} from "react-redux";
import InputForm from "../09-forms/InputForm";

const Form = () => {
    const [title, setTitle] = useInput('Task 1', [])
    const [complete, setComplete] = useState(false)
    const dispatch = useDispatch()

    const completeTask = () => {
        setComplete(!complete)
    }
    const saveTask = (event) => {
        event.preventDefault()
        const action = addTask({title, complete})
        dispatch(action)
    }

    return(
        <div>
            <h3>New Form</h3>
            <form onSubmit={saveTask}>
                <InputForm
                    label="title"
                    id="title"
                    value={title}
                    onChange={setTitle}
                    valid={true}
                    errors={[]}
                />
                <div>
                    <label htmlFor="completed">is it complete?</label>
                    <input type='checkbox' value={complete} onChange={completeTask}/>
                </div>

                <button type='submit'>Create task</button>
            </form>
        </div>
    )
}

export default Form
