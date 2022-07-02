import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { updateTodo,deleteTodo } from "../redux/action";

function TodoItem()
{
    const dispatch=useDispatch();
    const {todo}=useSelector((state)=>state);
    
    return (
        <div>
            {
                todo?.map((item)=>(
                    <div 
                    key={item.id}>
                        <h3>{item.title}</h3>
                        <button onClick={()=>
                        (
                            dispatch(updateTodo(item.id))   
                        )}>{item.status?"Complete":"Not Complete"}</button>
                       <button onClick={()=>
                        (
                            dispatch(deleteTodo(item.title))
                        )}> Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default TodoItem;