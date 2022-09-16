import React from 'react';
import Photocard from './profilephoto';
export default function Description() {
    return (
        <div className='descriptionContainer'>
                
                <div className="bio">
            <div class='container mx-auto' style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <Photocard></Photocard>
          <div style={{marginTop: '7vh', marginRight: '3vw'}}>
          Web developer/programmer from the Greater Seattle Area. Looking for an environment to grow my skillset and contribute towards new projects.

          </div>
            
            </div>
            </div> 
         <div className='description'>
            <div className='point'>
            <h3>Languages:</h3>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>COBOL</li>
   
            </ul>
            </div>
            <div className='point'>
            <h3>Skills:</h3>
            <ul>
                <li>React</li>
                <li>Continuous deployment</li>
                <li>Github</li>
                <li>NPM</li>
                <li>Web pack</li>
                <li>Algorithms</li>
            </ul>
            </div>
            <div className='point'>
            <h3>Hobbies:</h3>
            <ul>
               <li>Coding</li>
               <li>Music</li>
               <li>Jiu-Jitsu</li>
            </ul>
            </div>
            <div className='point'>
            <h3>Links:</h3>
            <ul>
               <li><a href={'https://www.codewars.com/users/Simple%20Rick'}>Codewars</a></li>
               <li><a href={'https://open.spotify.com/artist/6mvYPDBDJH2wulbU09TJrt'}>Music</a></li>
               <li><a href={'https://github.com/Dick-Alan'}>GitHub</a></li>
            </ul>
            </div>
            <div className='point'>
            <h3>Contact:</h3>
            <ul>
               <li>Email: RichardRekow@gmail.com</li>
               <li>USA phone: 425-502-5561</li>
               <li>Mexico Phone: 55-3274-6302</li>
            </ul>
            </div>
         </div>


       
           
        </div>
    )
}