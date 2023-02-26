import React from 'react'
import { Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const TeamCard = ({name,Position, imgUrl, githublink, linkdnlink,animation}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx mx-auto ">
        <img src={imgUrl} alt="Avtar" />
        
        <div className="proj-txtx">
          <div className="link">
          <a href={githublink}><AiFillGithub/></a>
          <a href={linkdnlink}><AiFillLinkedin/></a>
          </div>
        </div>
      </div>
        <div className="title ">
        <p className='name mx-auto d-flex align-items-center justify-content-center'>{name}</p>
        <p className='name mx-auto d-flex align-items-center justify-content-center'>{Position}</p>
        </div>
      
    </Col>
  )
}

export default TeamCard