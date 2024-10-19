import React, { useState, useEffect } from 'react'
import Logo from '../assets/winni.png'
import Insta from './insta.png'
import Telegram from './telegram.png'
import X from './x.avif'


import './header.css'

const header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

<header
      className="header"
      style={{
        width: '100%',
        color: 'white',
        fontSize: '22px',
        position: 'sticky',
        top: 0,
        backgroundColor: isScrolled ? '#070a0e' : 'transparent',
        transition: 'background-color 0.3s ease',
        zIndex: 1000,
      }}
    >
<div className="header-container">
    <div className="logo">
        <img src={Logo} alt="logo" className='logo-image' />
        <span className='logo-text'>Winnie Coin</span>
    </div>
     

<div className="social-icons">
  <a href="https://www.instagram.com/winniecoin.io/" target="_blank"><img src={Insta} alt="" className='insta' /></a>
<a href="https://t.me/winnie_coin" target="_blank"><img src={Telegram} alt="" className='insta' /></a>

<a href="https://twitter.com/WinnieCoin_io" target="_blank"><img src={X} alt="" className='youtube' /></a>

</div>





    </div>
</header>


    </>
  )
}

export default header