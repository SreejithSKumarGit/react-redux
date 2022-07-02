import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch,useSelector} from "react-redux";
import {addTodo} from "../redux/action";

function TodoInput()
{
    const [input,setInput]=React.useState();
    const dispatch=useDispatch();
    const {todo}=useSelector((state)=>state)
    
    const handleAdd=()=>
    {
        let payload={
            title:input,
            status:false,
            id:uuidv4()
        }
        dispatch(addTodo(payload));
        
        console.log(todo)
        setInput("");


    }
    return(
        <>
        <h1>Add TODO</h1>
        <input 
        type="text"
        value={input}
        placeholder="Add TODO"
        onChange={(e)=>setInput(e.target.value)}
         />
         <button onClick={handleAdd}>Add</button>
        </>
    )
}
export default TodoInput;