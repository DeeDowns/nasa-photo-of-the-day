import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
// import { POTD_URL, POTD_API_KEY} from '../constants'


const StyledDescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    
    h3 {
        width: 60%;
        font-size: 3rem;
        text-align: center;
    }  

    p {
        width: 40%;
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