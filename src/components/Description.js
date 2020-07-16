import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
// import { POTD_URL, POTD_API_KEY} from '../constants'

function Description (props) {
    const { explanation, title } = props;
    console.log(props)
    return ( 
        <div className='description-container'>
            <h3>{title}</h3>
            <p>{explanation}</p>
        </div>
    )
}

export default Description