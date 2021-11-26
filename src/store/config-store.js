import {createStore} from "redux";
import taskReducer from "./tasks";

export function getStore() {
    return createStore(taskReducer, [])
//    el segundo parametro es el estado inicial: para nosotros una lista de tareas, entonces un array
}
