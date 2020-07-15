import React, {useState, useEffect} from 'react';
// import axios from 'axios'
// import { POTD_URL, POTD_API_KEY} from '../constants'

function PhotoOTD (props) {
    const { img } = props
    console.log(img)
    return ( 
        <div>
            <h2>Photo of the Day</h2>
            <img src={img} alt='space' />
        </div>
    )
}

export default PhotoOTD