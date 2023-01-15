import React from 'react'
import '../Components/projects.css'
import sabujchga from '../Images/sabujcha.png'
import ModernStyle from '../Images/modernstyle1.png'
import react from '../Images/reactlogo.png'
import css from '../Images/logocss.png'

const Projects = () => {
  return (
    <div className='projects'>
        <h2>Projects</h2>
        <div className='cardProject'>
            <img src={ModernStyle} alt="" />
            <div>
                <h3>Modern Style</h3>
                <p> A make up and skinkare store in line. 
                    To automate the sending of the product 
                    order to Whats app</p>
                <div className='technologies'>
                <img src={react} alt="" />
                <img src={css} alt="" />
                </div>
            </div>
        </div>

        <div className='cardProject cardreverse'>
            <img src={sabujchga} alt="" />
            <div>
                <h3>Modern Style</h3>
                <p> A make up and skinkare store in line. 
                    To automate the sending of the product 
                    order to Whats app</p>
                <div className='technologies'>
                <img src={react} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects