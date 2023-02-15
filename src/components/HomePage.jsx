import React from 'react';
import { NavBar } from './Nav/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Event from './Events/Event';
import Glimpse from './Glimpse/Glimpse';
import Sponsor from './Sponsor/Sponsor';
import Team from './Team/Team';
import Footer from './Footer/Footer';

const HomePage = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Home/>
      <About/>
      <Event/>
      <Sponsor/>
      <Team/>
      <Glimpse/>
      <Footer/>
    </div>
  )
}

export default HomePage
