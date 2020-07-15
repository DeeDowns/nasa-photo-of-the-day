import React, {useState, useEffect} from 'react';

function Date (props) {
    const { date } = props;
    console.log(props)
    return ( 
        <div>
            <h3>{date}</h3> 
        </div>
    )
}

export default Date