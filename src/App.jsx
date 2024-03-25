import { useState } from 'react';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  return(
    <>
      <header>
        <div id="logo">Todo</div>
      </header>
      <main>
        <p className='text-6xl text-white'>Mathis</p>
        <button className="btn btn-outline btn-success">Success</button>
      </main>
    </>
  );
}