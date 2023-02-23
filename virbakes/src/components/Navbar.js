import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ContactButton } from './ContactButton';
import './Navbar.css';
import './ContactButton.css';
import '../App.css'

function Navbar() {
  const[click, setClick]=useState(false);
  const[button,setButton]=useState(true);

  const handleClick=()=> setClick(!click);

  const closeMobileMenu=()=> setClick(false);

  const showButton=()=>{
    if(window.innerWidth<=960){
      setButton(false);}
      else{
        setButton(true);
      }
    };
    
  useEffect(()=>{
    showButton();
  },[]);
//we use useEffect so that the button doesnt show up everytime we refresh

  window.addEventListener('resize',showButton);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          virbakes<i class="fa-solid fa-cookie-bite"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-xmark':'fas fa-bars'}/>
        </div>
      
      <ul className={click?'nav-menu active':'nav-menu'}>
        <li className='nav-item' >
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item' >
          <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
            Productos
          </Link>
          </li>
          <li className='nav-item' >
          <Link to='/Custom' className='nav-links' onClick={closeMobileMenu}>
            Personalizables
          </Link>
        </li>
        <li className='nav-item' >
          <Link to='/Contact' className='nav-links-mobile' onClick={closeMobileMenu}>
            Contacto
          </Link>
        </li>
      </ul>
      {button&&<ContactButton buttonStyle='btn--outline'>Contacto</ContactButton>}
      </div>
    </nav> 
    </>
  )
}

export default Navbar;

 