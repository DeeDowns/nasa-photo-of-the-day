import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { POTD_URL, POTD_API_KEY } from './constants/nasa_api';
import Photo from './components/Photo';
import Date from './components/Date';
import Description from './components/Description';
import Copyright from './components/Copyright';
import { TweenMax } from 'gsap';


// const keyFrame = keyframes `
//   0% {
//     transform: scale(0);
//     opacity: 0;
//   }

//   100% {
//     transform: scale(1);
//     opacity: 1;
//   }

// `
const StyledApp = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
 
 

  h1 {
    font-family:  'Titillium Web', sans-serif;
    font-size: 4rem;
    width: 40%;
    border-bottom: 3px solid red;
    text-align: center;

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

  const titleElement = useRef(null);

  useEffect(() => {
    TweenMax.to(
      titleElement.current, 4, { y: 18 }, { y: -18 }
      );
  }, [])


  return (
    <StyledApp className="app-container">
      <h1 ref={titleElement}>NASA Photo of the Day</h1>
      <Date date={imgData.date} />
      <Photo img={imgData.url} alt={imgData.media_type} />
      <Description title={imgData.title} explanation={imgData.explanation} />
      <Copyright copyright={imgData.copyright ? imgData.copyright : null} />
    </StyledApp>
  );
}

export default App;
