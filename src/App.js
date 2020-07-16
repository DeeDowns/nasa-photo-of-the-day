import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { POTD_URL, POTD_API_KEY } from './constants/nasa_api';
import Photo from './components/Photo';
import Date from './components/Date';
import Description from './components/Description';
import Copyright from './components/Copyright';


const keyFrame = keyframes `
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }

`
const StyledApp = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
 

  h1 {
    font-family:  'Titillium Web', sans-serif;
    font-size: 4rem;
    /* width: 60%; */
    border-bottom: 3px solid red;
    transform: scale(0);
    animation: ${keyFrame} 1s ease-in-out forwards;

  }

`

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
    <StyledApp className="app-container">
      <h1>NASA Photo of the Day</h1>
      <Date date={imgData.date} />
      <Photo img={imgData.url} alt={imgData.media_type} />
      <Description title={imgData.title} explanation={imgData.explanation} />
      <Copyright copyright={imgData.copyright ? imgData.copyright : null} />
    </StyledApp>
  );
}

export default App;
