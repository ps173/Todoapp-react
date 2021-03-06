import React,{useState} from 'react';
import Todolist from "./Todolist"

function Todo({todo,removeItem}){

const strikeItem = e => {
  let element = e.target
  if(element.classList.contains("strike")){
    element.classList.remove("strike")
  }
  else{
  e.target.classList.add("strike")
  console.log(e.target.classList)
  }
}

return (
   <>
     <li 
    className="box dark m-4"
    id={todo.id} 
    onClick={strikeItem}
    onDoubleClick={removeItem}
    > {todo.text} </li>
   </>
  )
}

export default Todo
