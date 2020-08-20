import React, {useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';


const StyledDateContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    border-bottom: 5px solid red;
    
    h2 {
        width: 20%;
        font-size: 3.5rem;
        text-align: center;
        /* margin-top: 0; */
        font-family:  'Titillium Web', sans-serif;
        font-weight: bold;
    }  

    p {
        width: 40%;
        font-size: 2rem;
        font-family: 'Lato', sans-serif;
        text-align: center;
    }  

    input {
        border: 2px solid red;
        margin-bottom: 2%;
    }
`

function Date (props) {
    const { date, handleDateInput } = props;
    console.log(props)

    const dateDiv = useRef(null);

    useEffect(() => {
      TweenMax.to(
        dateDiv.current, 3, { y: 18 }, { y: -18 }
        );
    }, [])

    return ( 
        <StyledDateContainer ref={dateDiv} className='date-container'>
            <h2>{date}</h2>
            <p>Find previous photos</p> 
            <input type="date" onChange={handleDateInput} />
        </StyledDateContainer>
    )
}

export default Date