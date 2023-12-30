import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

const url = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=fe9d5f6f0f3c4b2ac5d8c9f3bd88a60f`;


  return (
    <div className="App">
 
        <h1>Welcome to the weather app!</h1>
      
    </div>
  );
}

export default App;
