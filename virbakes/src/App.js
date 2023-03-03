import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import Products from './components/pages/products/Products';
import Custom from './components/pages/custom/Custom';
import Contact from './components/pages/ContactForm';
import Footer from './components/Footer';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    
    <>
    <Router basename="/virbakes">
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
