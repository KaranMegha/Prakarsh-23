import React from 'react'
import './Event.css'
import { EventCard } from './SEventCard'
import { Row, Col } from "react-bootstrap";
import bg from '../../assets/bgprakarsh.png';
import { useEffect, useState } from 'react';
import supabase from '../../lib/client'


function Event() {
  const event = [
    {
      imgurl: "assests/Events/cyber.png",
      title: "TechFest",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "./TechFest",
    },
    {
      imgurl: "assests/Events/wheels.png",
      title: "Avanta expo",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/circuithive.png",
      title: "Open R",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    
  ];
  
  // const [event, setEvent] = useState([]);
  // useEffect(() => {
  //   async function getEvents() {
  //     let { data, error } = await supabase.from("Event").select("*").eq("catagory", "cyber intrusion");
  //     setEvent(data);
  //   }

  //   getEvents();
  // }, []);
  
  return(
    
    <section className="container" id="Events">

      <div className="heading head mx-auto d-flex align-items-center justify-content-center">
          <h2
            className="abouthead  justify-content-center"
            // data-aos="zoom-out"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="500"
          >
            &nbsp;&nbsp;Event
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