import React from 'react';
import logo from './vslogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenidos a este curso</h1>
        <h2>Vamos a aprender React</h2>
        <p>Hola mundo, estoy usando React</p>
        <strong>Esto es un strong</strong>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
