/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

/* export default App */


import React from 'react';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        <Dashboard />
        <hr className="my-6" />
        <AddTask />
      </div>
    </div>
  );
};


export default App;

