import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { POTD_URL, POTD_API_KEY } from './constants/nasa_api';
import Photo from './components/Photo';
import Date from './components/Date';
import Description from './components/Description';
import Copyright from './components/Copyright';


function App() {
  const [imgData, setImgData] = useState('')

  useEffect(() => {
    axios.get(`${POTD_URL}?api_key=${POTD_API_KEY}`)
    .then(res => {
        console.log(res.data)
        setImgData(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  }, [])



  return (
    <div className="app-container">
      <h1>NASA Photo of the Day</h1>
      <Date date={imgData.date} />
      <Photo img={imgData.url} alt={imgData.media_type} />
      <Description title={imgData.title} explanation={imgData.explanation} />
      <Copyright copyright={imgData.copyright ? imgData.copyright : null} />
    </div>
  );
}

export default App;
