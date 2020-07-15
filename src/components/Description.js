import React, {useState, useEffect} from 'react';
import axios from 'axios'
// import { POTD_URL, POTD_API_KEY} from '../constants'

function Description (props) {
    const { explanation, title } = props;
    console.log(props)
    return ( 
        <div>
            <h4>{title}</h4>
            <p>{explanation}</p>
        </div>
    )
}

export default Description