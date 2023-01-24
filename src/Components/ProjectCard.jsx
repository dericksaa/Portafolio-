import React from 'react'


const ProjectCard = ({data}) => {

let {id, img, title, parraf, tec, link} = data 

  return (
  
    <div className='cardProject'>
          <a target='_blank' href={link}><img className='AnimationImg' src={img} alt="" /></a>
      <div className='AnimationText'>
        <h3>{title}</h3>
        <p>{parraf}</p>
        <div className='technologies'>
        <img src={tec} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard