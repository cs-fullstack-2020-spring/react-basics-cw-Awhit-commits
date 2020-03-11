import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hulu from './Hulu';

function App() {
  let huluShow ={
    title:"Cardinal",
    numberofSeasons: 3,
    genre:"Crime",
    rating:"7.7/10"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hulu hulu={huluShow}></Hulu>
    
      </header>
    </div>
  );
}

export default App;
