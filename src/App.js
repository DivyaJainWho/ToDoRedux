import  {useDispatch, useSelector} from 'react-redux'
import { AddTodoaction, RemoveTodoAction } from './action/TodoAction';
import { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState("");
  
  const dispatch = useDispatch()
  const Todo = useSelector((state)=>state.Todo)
  const {todos} = Todo

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(AddTodoaction(todo));
  }

  const removeHandler =(t)=>{
    dispatch(RemoveTodoAction(t))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter a Todo' className='input' onChange={(e)=>setTodo(e.target.value)}/>
          <button type='Submit' className='go'>Go</button>
        </form>
        <ul className='todos'>
          {
            todos && todos.map((t)=>(
            <li key={t.id} className='todo'>
              <span className='todotext'>{t.todo}</span>
              <button className='del' onClick={()=>removeHandler(t)}>Delete</button>
            </li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App