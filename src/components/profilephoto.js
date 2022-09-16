import React from 'react';

export default function Photocard() {
    return(
        <div className="imageContainer">
            <img src={require('./images/profilephoto.jpg')} alt='p' className='image'></img>
        </div>
    )
}