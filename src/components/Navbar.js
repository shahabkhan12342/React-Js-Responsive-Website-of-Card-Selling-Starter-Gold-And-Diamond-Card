import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);


  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();

  }, []);
  window.addEventListener('resize', showButton);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>


        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
               Shahab Khan
              </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>





            <ul className={click ? 'nav-menu active' : 'nav-menu'}>



              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                  </Link>
              </li>




              <li className='nav-item'>
                <Link
                  to='/aboutme'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                 About Me
                  </Link>
              </li>








            </ul>
          </div>
        </nav>

        
      </IconContext.Provider>
    </>

  )
}

export default Navbar
