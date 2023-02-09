import React from 'react'
import './Event.css'
import { EventCard } from './EventCard'
import { Row, Col } from "react-bootstrap";

function Event() {
  const event = [
    {
      imgurl: "assests/Events/cyber.png",
      title: "cyber intrusion",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/wheels.png",
      title: "wheels & wings",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/circuithive.png",
      title: "Circuithive",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/structonics.png",
      title: "structonics",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/innovative.png",
      title: "inovative heist",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/cyber.png",
      title: "wheels & wings",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/cyber.png",
      title: "wheels & wings",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/cyber.png",
      title: "wheels & wings",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/cyber.png",
      title: "wheels & wings",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
  ];
  return(
    <section className="Events container" id="event">
      <div className="heading head mx-auto d-flex align-items-center justify-content-center">
          <h2
            className="abouthead "
            // data-aos="zoom-out"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="500"
          >
            Events
          </h2>
          <h2 className="front-text mx-auto">Events</h2>
        </div>
    <Row>
      
      {event.map((members) => (
           <Col>
            <EventCard 
            item={members}
            imgurl={members.imgurl}
            title={members.title}
            description={members.description}
            link={members.link}
              
            />
            </Col>
          ))}
    </Row>
          

    </section>
  );
  
}

export default Event