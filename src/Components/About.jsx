import React, {useEffect}from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../Components/about.css'


const About = () => {

  // const cambio =()=>{
  //   const foto = document.querySelector('.imagenAbout')
  //   gsap.to(foto,{opacity:1})
  // }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".Animation1", {
      opacity:0,
      x:100,
      y:100
    },{
      opacity:1,
      x:0,
      y:0,
      duration:2,
      delay:0.5,
      scrollTrigger:{
        trigger:'.about',
        start:200,
        toggleActions:'restart'
      }
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".Animation2", {
      opacity:0,
      x:-100,
      y:100
    },{
      opacity:1,
      x:0,
      y:0,
      duration:2,
      delay:0.5,
      scrollTrigger:{
        trigger:'.about',
        start:200,
        toggleActions:'restart'
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
    <div className='about' id='about'>
        <h2>about me</h2>
        <div className='text_and_image Animation2'>
        <p>Hello World ! I'm Derick Saa, mechanical engineer 
        and full stack web developer resident in Colombia. 
        Giving life to the most creative projects from the 
        logic in the code and teaching others about what 
        I know, are two of the things that I am most passionate
        about.</p>
        <div className='imagenAbout Animation1'>
          {/* onMouseEnter={cambio} */}
          {/* onMouseLeave={salida}> */}
        </div>
        </div>
        
    </div>
  )
}

export default About