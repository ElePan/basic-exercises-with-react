import {ADD_TASK, COMPLETE_TASK} from "./action-types";

const addTask = (state, task) => {
    task.id = Math.random()

    return [...state, task]
//    crea un nuevo array unico con el contenido de state (lo hacen los ...) y concatena el task
//    si no crearia un array de 2 posiciones: primera- array de state, segunda-task
}

const completeTask = (state, id) => {
    return state.map(t => {
        if(t.id === id){
            t.complete = !t.complete
        }
        return t
    }
)}

export default function taskReducer(state, action){
    switch (action.type){
        case ADD_TASK:
            return addTask(state, action.payload)
        case COMPLETE_TASK:
            return completeTask(state, action.payload)
        default:
            return state
    }
}
