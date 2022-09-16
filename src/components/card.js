import React from 'react';

export default function Card(props) {
 
    return (
        <div className='projectCard'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img className='projectPreview' src={props.image} alt='p'></img>
            <br></br>
            <a className='viewButton' href={props.link}>View project</a>
        </div>

    )
}