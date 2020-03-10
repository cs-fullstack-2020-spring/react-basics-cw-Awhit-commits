import React from 'react';
import './App.css';

function Hulu(prop) {
  return (
    <div className="App">
      <header>
        {/* I think you could have styled this better (not used break tags) */}
        <p>
          Title..........{prop.hulu.title}<br></br>
          Season(s)..............{prop.hulu.numberofSeasons}<br></br>
          Genre...................Crime<br></br> {/* You should be referencing the property not hard coding the string*/}
          Rating.....................{prop.hulu.rating}</p>

      </header>
    </div>
  );
}

export default Hulu;
