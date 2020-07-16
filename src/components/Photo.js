import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledPhotoContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    
    img {
        border-radius: 10px;
    }

`

function Photo (props) {
    const { img, alt} = props
    console.log(props)
    return ( 
        <StyledPhotoContainer className='photo-container'>
            <img src={img} alt={`${alt} of the day`} />
        </StyledPhotoContainer>
    )
}

export default Photo