import './App.css';
import Addtodo_button from './components/addtodo_button';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <Addtodo_button />
      <TodoList />
    </div>
  );
}

export default App;
