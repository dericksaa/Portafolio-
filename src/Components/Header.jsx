import React from 'react'
import '../Components/header.css'
const { useState } = React;

const Header = () => {

  const [menu, setmenu] = useState(false)

  const camb =()=> setmenu(!menu)

  return (
    <header className='header'>
        <div className='logoso'></div>
        <div className='hamburguesa'>
          <button className='menuButtom' onClick={camb}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#E7A21E" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </button>
          <nav className={`nav ${menu?'isActive':''}`}>
            <a href="">About</a>
            <a href="">Training</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </nav>
        </div>
    </header>
  )
}

export default Header