import React, {useState} from 'react'
import Todo  from "./Todo"
import Todoform from "./Todoform"

function Todolist(){
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    let regex = /[^\s]+/g
    if (todo.text===''){
      return 
    }
    else{
      const newTodos = [todo, ...todos]
      setTodos(newTodos)
      console.log(todos)
    }
  }

  const removeTodo = e =>{
    let element = e.target
    const removeArr = [...todos].filter(todo => todo.text !== e.target.innerText)

    localStorage.removeItem(e.target.innerText)

    setTodos(removeArr)
  }


  return (
    <>
      <nav className="navbar dark2">
       <div className="navbar-brand">
          <h1 className="nav-head"> Todo-App </h1>
        </div>
      </nav> 
     <div className="m-4 box dark">
        <h1>What's up for today? </h1>
        <Todoform onSubmit={addTodo}/>
     </div>
     <ol className="todo-list">
       {
          todos.map(obj => (<Todo todo={obj} removeItem={removeTodo}/>))
       }
     </ol>
    </>
  )
}

export default Todolist
