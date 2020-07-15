import React, {useState, useEffect} from 'react';

// import axios from 'axios'
// import { POTD_URL, POTD_API_KEY} from '../constants'

function Photo (props) {
    const { img, alt} = props
    console.log(props)
    return ( 
        <div>
            <h2>Photo of the Day</h2>
            <img src={img} alt={`${alt} of the day`} />
        </div>
    )
}

export default Photo