import React from 'react';
import './App.css';

function Hulu(prop) {
  return (
    <div className="App">
      <header className="App-header">
      <p>
      Title..........{prop.hulu.title}<br></br>
Season(s)..............{prop.hulu.numberofSeasons}<br></br>
Genre...................Crime<br></br>
Rating.....................{prop.hulu.rating}</p>
       
      </header>
    </div>
  );
}

export default Hulu;
