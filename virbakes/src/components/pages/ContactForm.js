import React from 'react';
import '../../App.css';
 

export default function Contact() {
  return (
    <div   className='contact'>
    <h1 >Qué te apetece?? </h1>
    <h1 id="talkbubble">Hablemos</h1>
    <div className='contact__container'>
        <div className='contact__item'>
          <a className='was' href='https://wa.me/34687095451'><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className='contact__item'>
         <a className='mail' href='mailto:virbakes@gmail.com'><i class="fa-solid fa-envelope"></i></a>
        </div>
        <div className='contact__item'>
         <a className='insta' href='https://www.instagram.com/virbakes/'><i class="fa-brands fa-instagram"></i></a>
        </div>
        </div>
    </div>
  )
}
