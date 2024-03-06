import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import TodoDisplay from './components/TodoDisplay';

const App = () => {
  const [todos, setTodos] = useState([])
  const addTodoData = (newTitle, newDesc) => {
    let newData = {
      id:todos.length + 1,
      title: newTitle,
      description: newDesc,
      completed: 'false'
    }
    setTodos(pval => [...pval, newData]) // setTodos([...todos, newData])
    console.log("added");
    
  }
  console.log(todos);
  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>
      <h1>App Component</h1>
      {/* <Lifecycle /> */} 

      <InputComponent addTodoData = {addTodoData} />
      {todos.map((item,index) => {
        return (
          <>
            <TodoDisplay item={item} index={index} deleteTodoItem = {deleteTodoItem} />
          </>
        )
      })}
      
    </div>
  );
};

export default App;