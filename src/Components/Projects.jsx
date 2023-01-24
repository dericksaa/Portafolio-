import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../Components/projects.css'
import ProjectCard from './ProjectCard'
import {ProjectDat} from './ProjectData'


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
          trigger:'.cardProject',
          toggleActions:'restart',
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
            trigger:'.cardProject',
            toggleActions:'restart',
          }
        });
      }, []);

  return (
    <div className='projects' id='projex'>
        <h2>Projects</h2>
        <>
            {ProjectDat.map(item=>(
              <ProjectCard key={item.id} data={item}/>
            ))}
        </>
    </div>
  )
}

export default Projects