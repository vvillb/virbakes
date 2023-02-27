import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';

import Home from './components/pages/Home.js';
import CardsItem from './components/CardsItem';
import Cards from './components/Cards';
import Products from './components/pages/Products';
import Custom from './components/pages/Custom';
import Contact from './components/pages/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/custom' element={<Custom/>}/>
      <Route path='/contact'element={<Contact/>}/>
      </Routes>
       <Footer/>
      
    </Router>
      
    </> 
  );
}

export default App;
