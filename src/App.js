import './App.css';
import Addtodo_button from './components/addtodo_button';
import {useState} from 'react'
import TodoList from './components/todoList';
import TodoForm_modal from './components/todoForm_modal';


function App() {

  const[openForm, setOpenForm]=useState(false)

  return (
    <div className="App">
      <Addtodo_button openForm={openForm} setOpenForm={setOpenForm}/>
      {/* <TodoList /> */}
      <TodoForm_modal openForm={openForm} setOpenForm={setOpenForm} />
    </div>
  );
}

export default App;
