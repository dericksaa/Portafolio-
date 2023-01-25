import React from 'react'


const ProjectCard = ({data}) => {

let {id, img, title, parraf, tec, link, tec2, tec1, tec3, tec4} = data 

  return (
  
    <div className='cardProject'>
          <a target='_blank' href={link}><img className='AnimationImg' src={img} alt="" /></a>
      <div className='AnimationText'>
        <h3>{title}</h3>
        <p>{parraf}</p>
        <div className='technologies'>
        <img src={tec3} alt="" />
        <img src={tec4} alt="" />
        <img src={tec} alt="" />
        <img src={tec1} alt="" />
        <img src={tec2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard