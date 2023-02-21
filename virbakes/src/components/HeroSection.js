import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Button.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Horneado con cariño</h1>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                Ver productos
            </Button>
        </div>
    </div>
  )
}
//added video: 46:50
export default HeroSection;
