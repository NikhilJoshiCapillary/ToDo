import { CREATE_TASK, REMOVE_TASK, EDIT_TASK} from "./constant"
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./constant"

export function createTask(task){
    return{
        type: CREATE_TASK,
        payload:task
    }
}


export function removeTask(i){
    return{
        type: REMOVE_TASK,
        payload:i
    }
}

// export function editTask({task, i}){
//     return{
//         type: EDIT_TASK,
//         payload:{updated_task:task, index:i}
//     }
// }

// actions.jsx
export function editTask({ updatedTask, index }) {
    return {
        type: EDIT_TASK,
        payload: { updated_task: updatedTask, index: index }
    }
}





export const getUsersFetch = () =>({
   type:GET_USERS_FETCH
})




