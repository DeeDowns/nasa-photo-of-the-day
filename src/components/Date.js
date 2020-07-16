import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Date (props) {
    const { date } = props;
    console.log(props)
    return ( 
        <div className='date-container'>
            <h2>{date}</h2> 
        </div>
    )
}

export default Date