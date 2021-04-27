import React, {useState} from 'react'

function Todoform (props){
  const [input , setInput] = useState('')

  const handleChange = e =>{
    setInput(e.target.value)
  }
  
  const handleSubmit = e =>{
    e.preventDefault();
    
    props.onSubmit({
      id : Math.floor(Math.random()*10000),
      text: input
    });

    localStorage.setItem(input , Math.floor(Math.random()*10000) )

    setInput('');
  }

  return (
   <form className="m-4 todo-form" onSubmit={handleSubmit}>
     <input 
       value={input} 
       type="text"
       name="text"
       className="input dark"
       placeholder="add a todo"
       onChange={handleChange}
     />
     <button type="submit" className="button dark3 m-2"> Add todo </button>
   </form>
  )
}

export default Todoform
