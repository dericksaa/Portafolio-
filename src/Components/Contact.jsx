import React from 'react'
import '../Components/contact.css'
import Gmail from '../Images/logogmail.png'
import linkedin from '../Images/logolinkedin.png'
import github from '../Images/logogithub.png'

const Contact = () => {
  return (
    <div className='contact'>
        <h2>Contact me</h2>
        <div>
          <img src={Gmail} alt="" />
          <a>dericksaa@gmai.com</a>
        </div>
        <div>
          <img src={linkedin} alt="" />
          <a href="">Derick Saa Ortega</a>
        </div>
        <div>
          <img src={github} alt="" />
          <a href="">dericksaa</a>
        </div>
    </div>
  )
}

export default Contact