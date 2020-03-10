import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hulu from './Hulu';

function App() {
  let huluShow = {
    title: "Cardinal",
    numberofSeasons: 3,
    genre: "Crime",
    rating: "7.7/10"
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* No need to leave the logo in the file, I anticipated you updating or removing this images as a part of your styling */}
        <img src={logo} className="App-logo" alt="logo" />
        <Hulu hulu={huluShow}></Hulu>

      </header>
    </div>
  );
}

export default App;
