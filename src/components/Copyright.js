import React, {useState, useEffect} from 'react';
import axios from 'axios'
// import { POTD_URL, POTD_API_KEY} from '../constants'

function Description (props) {
    const { copyright } = props;
    console.log(props)
    return ( 
        <div className='copyright-container'>
            <p>{copyright}</p>
        </div>
    )
}

export default Description