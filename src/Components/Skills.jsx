import React from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../Components/skills.css'

const Skills = () => {

  const cambio =({currentTarget})=>{
    gsap.fromTo(currentTarget,{
      scale:1
    },{
      scale:1.2
    })
  }

  const reduct =({currentTarget})=>{
    gsap.fromTo(currentTarget,{
      scale:1.2
    },{
      scale:1
    })
  }

  return (
    <div className='SkillsSection'>
    <h2>Skills</h2>
    <div className='skills'>
        <div className='logoSkill skillsLogo1'
        onMouseLeave={reduct}
        onMouseEnter={cambio}></div>
        <div className='logoSkill skillsLogo2'
        onMouseLeave={reduct}
        onMouseEnter={cambio}></div>
        <div className='logoSkill skillsLogo3' 
        onMouseLeave={reduct}
        onMouseEnter={cambio}></div>
        <div className='logoSkill skillsLogo4'
        onMouseLeave={reduct}
        onMouseEnter={cambio}></div>
        <div className='logoSkill skillsLogo5' 
        onMouseLeave={reduct}
        onMouseEnter={cambio}></div>
    </div>
    </div>
  )
}

export default Skills