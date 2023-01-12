import React from 'react'
import '../Components/header.css'
const { useState, useEffect } = React;

const Header = () => {

  return (
    <div className='header'>
        <div className='logoso'></div>
        <div className='nav'>
          <a href="">About</a>
          <a href="">Training</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
    </div>
  )
}

export default Header