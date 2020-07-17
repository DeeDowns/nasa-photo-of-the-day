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
  const [imgData, setImgData] = useState('');
  const [date, setDate] = useState('');
  const apiDate = `&date=${date}`;
  

  useEffect(() => {
    axios.get(`${POTD_URL}?api_key=${POTD_API_KEY}${apiDate}`)
    .then(res => {
        console.log(res.data)
        setImgData(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  }, [date])


  const handleDateInput = e => {
    e.preventDefault();
    setDate(e.target.value);
  }

  const titleElement = useRef(null);

  useEffect(() => {
    TweenMax.to(
      titleElement.current, 3, { y: 18 }, { y: -18 }
      );
  }, [])


  return (
    <StyledApp className="app-container">
      <h1 ref={titleElement}>NASA Photo of the Day</h1>
      <Date date={imgData.date} handleDateInput={handleDateInput} />
      <Photo img={imgData.url} alt={imgData.media_type} />
      <Description title={imgData.title} explanation={imgData.explanation} />
      <Copyright copyright={imgData.copyright ? imgData.copyright : null} />
    </StyledApp>
  );
}

export default App;
