import React from 'react';
import './App.css';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      <div className='scoreboard'>
      <Display />      
      <Dashboard />
    </div>
  </div>
  );
}

export default App;
