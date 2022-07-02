import { ADD_TODO, UPDATE_TODO ,DELETE_TODO} from "./actionTypes";

export const addTodo=(data)=>
(
    {
        type:ADD_TODO,
        payload:data
    }
);

export const updateTodo=(data)=>(
    {
        type:UPDATE_TODO,
        payload:data
    }
);
export const deleteTodo=(data)=>
(
    {
        type:DELETE_TODO,
        payload:data
    }
)