import React from 'react';
import { NavBar } from './Nav/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Event from './Events/Event';
import Glimpse from './Glimpse/Glimpse';
import Sponsor from './Sponsor/Sponsor';
import Team from './Team/Team';
import Footer from './Footer/Footer';
import SEvent from './SpecEvents/SEvent';
import EventPage from './EventPage/EventPage';
// import ParticularEventPage from './ParticularEventPage/ParticularEventPage';

const HomePage = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Home/>
      <About/>
      {/* <Event/> */}
      <SEvent/>
      <Sponsor/>
      {/* <EventPage/> */}
      {/* <ParticularEventPage/> */}
      <Team/>
      <Glimpse/>
      <Footer/>
    </div>
  )
}

export default HomePage
