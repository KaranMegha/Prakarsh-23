import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Sponsor.css'
import { Col } from "react-bootstrap";
import 'react-bootstrap'


export const SponserCard = ( ) => {
  return (
    


    <section className="container" id="Sponser">

  <div className="heading head mx-auto d-flex align-items-center justify-content-center">
    <h2
      className="abouthead text-align-center justify-content-center"
      // data-aos="zoom-out"
      // data-aos-offset="300"
      // data-aos-easing="ease-in-out"
      // data-aos-delay="500"
    >
      Sponser
    </h2>
    <h2 className="front-text mx-auto">Sponser</h2>
  </div>  

  <div className="titlesponser ">
    <h1> Title Sponser</h1>

  <div className="arrange">
  <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>

    <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>

</div>

  </div>
 

  <div className="poweredsponser">
    <h1> Powered Sponser</h1>

        <div className="arrange">
        <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>
      


    <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>
      </div>


  </div>
 

  <div className="goldsponser">
    <h1> Gold Sponser</h1>

  <div className='arrange'>
      <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>
      


      <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>

</div>

  </div>

  <div className="silversponser">
    <h1> Silver Sponser</h1>

  <div className='arrange'>
      <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>
      


      <Card className='card mx-auto d-flex align-items-center justify-content-center'>
      <Card.Img className='mx-auto d-flex align-items-center justify-content-center imgc ' variant="top" src= "assests/Events/cyber.png" />
      
    </Card>

</div>

  </div>
 
 
      

</section>


  );
}

export default SponserCard