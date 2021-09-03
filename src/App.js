import React from 'react'
import TodoList from './Todo/TodoList';

function App(){
  const todos = [
    {id: 1, completed: false, title: 'Buy1'},
    {id: 1, completed: false, title: 'Buy2'},
    {id: 1, completed: false, title: 'Buy3'}
  ]



  return (
    <div className='wrapper'>
      <h1>Вход</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
