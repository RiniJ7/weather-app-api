import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
const[data, setData] = useState({});
const[location, setLocation] = useState('');

const url = `api.openweathermap.org/data/2.5/weather?lat=51.049999&lon=-114.066666&appid={APIKEY}`;

const searchLocation = (event) => {
  
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
 
}


  return (
    <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>
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
