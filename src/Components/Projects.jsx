import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../Components/projects.css'
import sabujchga from '../Images/sabujcha.png'
import ModernStyle from '../Images/modernstyle1.png'
import react from '../Images/reactlogo.png'
import css from '../Images/logocss.png'

const Projects = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(".AnimationText", {
        opacity:0,
        x:100,
        y:100
        },{
        opacity:1,
        x:0,
        y:0,
        duration:2.5,
        delay:1,
        scrollTrigger:{
            trigger:'.projects'
        }
        });
      }, []);
    
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(".AnimationImg", {
          opacity:0,
          x:-100,
          y:100
        },{
          opacity:1,
          x:0,
          y:0,
          duration:2.5,
          delay:0.5,
          scrollTrigger:{
            trigger:'.projects'
          }
        });
      }, []);

  return (
    <div className='projects'>
        <h2>Projects</h2>
        <div className='cardProject'>
            <img className='AnimationImg' src={ModernStyle} alt="" />
            <div className='AnimationText'>
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
            <img className='AnimationImg' src={sabujchga} alt="" />
            <div className='AnimationText'>
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