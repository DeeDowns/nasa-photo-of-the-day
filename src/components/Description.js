import React, {useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';


const StyledDescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-left: 6%;
    
    h3 {
        width: 90%;
        font-size: 3rem;
        text-align: center;
        border-bottom: 3px solid red;
        font-family:  'Titillium Web', sans-serif;
    }  

    p {
        width: 90%;
        font-size: 2rem;
        font-family: 'Lato', sans-serif;
        text-align: center;
    }  
`


function Description (props) {
    const { explanation, title } = props;
    console.log(props)

    const descriptionDiv = useRef(null);

    useEffect(() => {
        TweenMax.to(
            descriptionDiv.current, 4, { x: -30 }, { x: 30 }
        ); 
    }, [])


    return ( 
        <StyledDescriptionContainer ref={descriptionDiv} className='description-container'>
            <h3>{title}</h3>
            <p>{explanation}</p>
        </StyledDescriptionContainer>
    )
}

export default Description