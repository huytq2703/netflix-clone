import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            handleShow(window.scrollY > 100 ? true : false);
        }); 
        return () =>{
            window.removeEventListener("scroll");
        }
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netfix Logo'
        />
        <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netfix Logo'
        />
    </div>
  )
}

export default Nav