import Home from './components/Home/Home';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Parent from './components/Parent';
import Child from './components/Child';
function App() {
  return (
    <div className="App">
      < Navbar/>
            < Home/>
            < Parent/>
    </div>
  );
}

export default App;
