import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
// import { POTD_URL, POTD_API_KEY} from '../constants'


const StyledDescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    margin: 0 3%;
    
    h3 {
        width: 90%;
        font-size: 3rem;
        text-align: center;
        border-bottom: 3px solid red;
    }  

    p {
        width: 90%;
        font-size: 2rem;
    }  
`


function Description (props) {
    const { explanation, title } = props;
    console.log(props)
    return ( 
        <StyledDescriptionContainer className='description-container'>
            <h3>{title}</h3>
            <p>{explanation}</p>
        </StyledDescriptionContainer>
    )
}

export default Description