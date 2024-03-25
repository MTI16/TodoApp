import { useState } from 'react';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  return(
    <>
      <header>
        <div id="logo">Todo App</div>
      </header>
      <main>
        <div className="container-input">
          <input type="text" placeholder="Was muss ich machen.." className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-outline btn-success" id='addButton'>Add</button>
        </div>
        <div className="divider divider-neutral" id='divider'></div>
      </main>
    </>
  );
}