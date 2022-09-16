import React from 'react';
import Card from './card';

export default function Projects() {
    return(
        <div>
          
        <div className="projects">
        <h1>Example Projects:</h1>
            <div className='projectCards'>
                <Card description='A modular in-browser synthesizer built with React and Tone.js. Easy to play musical instrument that is always in the key you pick!'
                 image={require('./images/keyboard.PNG')} 
                 link='https://easykeyboard.netlify.app/' 
                 title="Easy Keyboard"></Card>
                <Card 
                title='Seattle Crime Data Visualizer' 
                description='A crime data scanner for the city of Seattle.' 
                image={require('./images/seattlepreview.PNG')}
                 link='https://seattlecrime.netlify.app/'></Card>
                 <Card 
                title='UK Crime Data Visualizer' 
                description='A crime data scanner for the United Kingdom' 
                image={require('./images/ukpreview.PNG')}
                 link='https://ukcrimedata.netlify.app/'></Card>
                 <Card 
                title='Crypto Data Website' 
                description='A website for information about cyrptocurrencies including news and price data.' 
                image={require('./images/cryptopreview.PNG')}
                 link='https://cryptocurrencydata.netlify.app/'></Card>
            </div>
            </div>
        </div>
    )
}