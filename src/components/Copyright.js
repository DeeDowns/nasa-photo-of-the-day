import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledCrContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
 

  p {
    font-family:  'Titillium Web', sans-serif;
    font-size: 1.8rem;
    width: 15%;
    border-bottom: 3px solid red;
    text-align: center;

  }

`

function Description (props) {
    const { copyright } = props;
    console.log(props)
    return ( 
        <StyledCrContainer className='copyright-container'>
            <p>Photo © {copyright}</p>
        </StyledCrContainer>
    )
}

export default Description