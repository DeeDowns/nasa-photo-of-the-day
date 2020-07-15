import React, {useState, useEffect} from 'react';

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