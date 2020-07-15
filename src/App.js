import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PhotoOTD from './components/PhotoOTD'
import { POTD_URL, POTD_API_KEY } from './constants/nasa_api'

function App() {
  const [img, setImg] = useState('')
  useEffect(() => {
    axios.get(`${POTD_URL}?api_key=${POTD_API_KEY}`)
    .then(res => {
        console.log(res.data)
        setImg(res.data.url)
    })
    .catch(err => {
        console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1>NASA</h1>
      <PhotoOTD img={img}/>
    </div>
  );
}

export default App;
