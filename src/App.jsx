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
      <main>
        <div className="container">
          <div id="logo">todo list.</div>
          <div className="todo-input">
            <input type="text" 
            placeholder="Was muss ich machen.." 
            value={input}
            onChange={e => setInput(e.target.value)}/>
            <button id='addButton' onClick={addTodo}>+</button>
          </div>
        </div>
        <div className="container-todos">
            {todos.map(item => {
              return(
                <div key={generateUUID()} className='todo'>
                  <p>{item}</p>
                  <button id='removeButton' onClick={() => removeTodo(item)}>-</button>
                </div>
              );
            })}
          </div>
      </main>
    </>
  );
}