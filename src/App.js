import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

const url = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=fe9d5f6f0f3c4b2ac5d8c9f3bd88a60f`;


  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
<p1>Dallas</p1>
          </div>
          <div className="temp">
            <h1>50 deg F</h1>
          </div>
          <h2>Description</h2>
          <p>Clouds</p>
        </div>
      </div>
 <div className="bottom">
  <div className="feels">
    <p>65deg F</p>
  </div>
  <div className="humidity">
    <p>20%</p>
  </div>
 </div>
        <h1>Welcome to the weather app!</h1>
      
    </div>
  );
}

export default App;
