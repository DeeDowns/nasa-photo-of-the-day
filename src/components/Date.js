import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const StyledDateContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    
    h2 {
        width: 60%;
        font-size: 3.5rem;
        text-align: center;
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