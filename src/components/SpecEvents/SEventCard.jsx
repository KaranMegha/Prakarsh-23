import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Event.css'
import { Col } from "react-bootstrap";
import 'react-bootstrap'
import { Link } from 'react-router-dom';


export const EventCard = ({ imgurl, title, description,link}) => {
  return (
    <Link to={link}style={{ textDecoration: 'none' }} >
     <div className='container bg' data-aos="fade-up"   data-aos-offset="200"  data-aos-once="false" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-duration="1500">
      <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src={imgurl} />
      <Card.Body>
        <Card.Title className='title mx-auto d-flex align-items-center justify-content-center'>{title}</Card.Title>
        <Card.Text className='description mx-auto d-flex align-items-center justify-content-center'>
          {description}
        </Card.Text>
         <Button className='mx-auto d-flex align-items-center justify-content-center button' variant="primary">view more</Button> 
     </Card.Body> 
    </Card> 
     </div> 
    
    </Link>
  )
}

export default EventCard