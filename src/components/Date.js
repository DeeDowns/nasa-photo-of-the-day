import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const StyledDateContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 5px solid red;
    
    h2 {
        width: 20%;
        font-size: 3.5rem;
        text-align: center;
        margin-top: 0;
    }  

 
`

function Date (props) {
    const { date } = props;
    console.log(props)
    return ( 
        <StyledDateContainer className='date-container'>
            <h2>{date}</h2> 
        </StyledDateContainer>
    )
}

export default Date