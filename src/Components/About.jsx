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
        <p>¡Hola mundo ! soy Derick Saa, ingeniero 
            mecánico y programador web full stack 
            residente en Colombia. Dar vida a los proyectos más creativos a partir de la lógica en el código y enseñar a los demás sobre lo que se, son dos de las cosas que más me apasionan.
        </p>
        <div className='imagenAbout Animation1'>
          {/* onMouseEnter={cambio} */}
          {/* onMouseLeave={salida}> */}
        </div>
        </div>
        
    </div>
  )
}

export default About