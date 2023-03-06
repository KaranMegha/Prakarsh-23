import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Event.css'
import {Link} from 'react-router-dom'
import { Col } from "react-bootstrap";
import 'react-bootstrap'


export const EventCard = ({ imgurl, title, description,link}) => {
  return (
    <div className='container bg'>
      <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src={imgurl} />
      <Card.Body>
        <Card.Title className='title mx-auto d-flex align-items-center justify-content-center'>{title}</Card.Title>
        <Card.Text className='description  mx-auto d-flex align-items-center justify-content-center'>
          {description}
        </Card.Text>
        <Button className='mx-auto d-flex align-items-center justify-content-center button' variant="primary" href={link}>view more<Link to={link}/></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default EventCard