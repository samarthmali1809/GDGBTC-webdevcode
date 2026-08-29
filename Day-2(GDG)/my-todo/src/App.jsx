import './App.css'
import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([]);
const [text, setText] = useState('');

function addTodo() {
  if (text === "") return;
  setTodos([...todos, {id: Date.now(), text}]);
  setText('');

}


return <div>
<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
<button onClick={addTodo}>Add Todo</button>
<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
</div>
}

export default App;