import {ADD_TASK, COMPLETE_TASK} from "./action-types";

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function completeTask(idTask) {
    return {
        type: COMPLETE_TASK,
        payload: idTask
    }
}
