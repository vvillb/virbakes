import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              virbakes
              <i class='fa-solid fa-cookie-bite' />
            </Link>
          </div>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/virbakes/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link titok'
              to='https://www.tiktok.com/@virbakes'
              target='_blank'
              aria-label='Tiktok'
            >
            
              <i class='fab fa-tiktok' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
//tiktok es youtube