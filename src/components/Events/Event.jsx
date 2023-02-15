import React from 'react'
import './Event.css'
import { EventCard } from './EventCard'
import { Row, Col } from "react-bootstrap";
import bg from '../../assets/bgprakarsh.png';
import { useEffect, useState } from 'react';
import supabase from '../../lib/client'


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
      title: "arcadian evovle",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/sharks.png",
      title: "s.h.a.r.k.s",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/handson.png",
      title: "Hands-on",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/ws.png",
      title: "workshop",
      description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, porta a justo at, suscipit scelerisque erat. Quisque risus dui, ultrices ac semper sed,",
      link: "",
    },
    {
      imgurl: "assests/Events/fab.png",
      title: "Fab-Lab",
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
            imgurl={members.image}
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