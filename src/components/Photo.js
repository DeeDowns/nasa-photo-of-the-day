import React, {useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';

const StyledPhotoContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 10% 0;
    
    img {
        border-radius: 10px;
        width: 65%;
        /* margin: 5% 0; */
    }

`

function Photo (props) {
    const { img, alt} = props
    console.log(props)

    const photoDiv = useRef(null);

    useEffect(() => {
        TweenMax.to(
            photoDiv.current, 4, { x: 30 }, { x: -30 }
        ); 
    }, [])


    return ( 
        <StyledPhotoContainer ref={photoDiv} className='photo-container'>
            <img src={img} alt={`${alt} of the day`} />
        </StyledPhotoContainer>
    )
}

export default Photo