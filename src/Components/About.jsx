import React, {useEffect}from 'react'
import {gsap} from 'gsap'
import '../Components/about.css'
import ScrollTrigger from 'gsap/ScrollTrigger'


const About = () => {

  // const cambio =()=>{
  //   const foto = document.querySelector('.imagenAbout')
  //   gsap.to(foto,{opacity:1})
  // }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".imagenAbout", {
      opacity:1,
      duration:3,
      delay:0.5,
      scrollTrigger:{
        trigger:'.imagenAbout'
      }
    });
  }, []);


  // const salida =({currentTarget})=>{
  //   gsap.to(currentTarget,{opacity:1})
  // }


  // useEffect(() => {
  //   const foto = document.querySelector('.imagenAbout')
  //   gsap.to(foto,{opacity:0})
  // }, [])
  

  return (
    <div className='about'>
        <h2>about me</h2>
        <div className='text_and_image'>
        <p>Hello World ! I'm Derick Saa, mechanical engineer 
        and full stack web developer resident in Colombia. 
        Giving life to the most creative projects from the 
        logic in the code and teaching others about what 
        I know, are two of the things that I am most passionate
        about.</p>
        <div className='imagenAbout'>
          {/* onMouseEnter={cambio} */}
          {/* onMouseLeave={salida}> */}
        </div>
        </div>
        
    </div>
  )
}

export default About