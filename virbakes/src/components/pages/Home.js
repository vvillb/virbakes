import React from 'react';
import'../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import '../HeroSection.css'

function Home(){
    return(
        <>
        <HeroSection/>
        <Cards/>
        </>
    );
}

export default Home;