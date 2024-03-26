import { useState } from 'react';
import { generateUUID } from 'three/src/math/MathUtils';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();

  function addTodo() {
    setTodos([...todos, input]);
    setInput('');
  }

  function removeTodo(todo) {
    setTodos(prevtodos => prevtodos.filter(item => item !== todo));
  }

  return(
    <>
      <header>
        <div id="logo">Todo App</div>
      </header>
      <main>
        <div className="container-input">
          <input type="text" placeholder="Was muss ich machen.." className="input input-bordered w-full max-w-xs" 
          value={input}
          onChange={e => setInput(e.target.value)}/>
          <button className="btn btn-outline btn-success" id='addButton' onClick={addTodo}>hinzufügen</button>
        </div>
        <div className="divider divider-neutral" id='divider'></div>
        <div className="container-todos">
          {todos.map(item => {
            return(
              <div key={generateUUID()} className='todo'>
                <p className='text-xl'>{item}</p>
                <button className="btn btn-outline btn-error" id='removeButton' onClick={() => removeTodo(item)}>entfernen</button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}