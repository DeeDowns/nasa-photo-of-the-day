import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PhotoOTD from './components/PhotoOTD'
import { POTD_URL, POTD_API_KEY } from './constants/nasa_api'

function App() {

  useEffect(() => {
    axios.get(`${POTD_URL}?api_key=${POTD_API_KEY}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1>NASA</h1>
      <PhotoOTD />
    </div>
  );
}

export default App;
