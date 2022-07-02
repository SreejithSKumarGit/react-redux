import { ADD_TODO, UPDATE_TODO ,DELETE_TODO} from "./actionTypes";

export const reducer =(store,action)=>
{
    switch(action.type)
    {
        case ADD_TODO:
            return{
                ...store,
                todo:[...store.todo,action.payload]
            };
        case UPDATE_TODO:
            return{
                ...store,
                todo:store.todo.map((item) => item.id===action.payload?{...item,status:!item.status}:item)
            };
        case DELETE_TODO:
            return {
                ...store,
                todo:store.todo.filter((item)=>item.title!==action.payload)
            }
        default :
        return store;
    }
}