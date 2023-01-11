import React from 'react'
import logoSaa from '../Images/logoSaa.png'

const Header = () => {
  return (
    <div>
        <img src={logoSaa} alt="" />
        <ul>
            <li>About</li>
            <li>Training</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header