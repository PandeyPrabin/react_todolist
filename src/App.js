import './App.css';
import Addtodo_button from './components/addtodo_button';
import {useState} from 'react'
import TodoList from './components/todoList';
import TodoForm_modal from './components/todoForm_modal';


function App() {

  const [openForm, setOpenForm] = useState(false)
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <Addtodo_button openForm={openForm} setOpenForm={setOpenForm}/>

      <TodoList todos={todos} setTodos={setTodos} openForm={openForm} setOpenForm={setOpenForm}/>
      
      <TodoForm_modal 
      todos={todos} setTodos={setTodos}
      openForm={openForm} setOpenForm={setOpenForm} />
    </div>
  );
}

export default App;
