import React, { Suspense, useRef } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Team from "./components/Team/Team";
import Event from "./components/Events/Event";
import Sponsor from "./components/Sponsor/Sponsor";
import { NavBar } from "./components/Nav/NavBar";
import Glimpse from "./components/Glimpse/Glimpse";
import Signup from "./components/Signup/Signup";
import Registration from "./components/registration/registration";
import TechFest from "./components/Events/Event";
import { render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {

  return (
    <div>
      <NavBar/>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/TechFest" element={<Event/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
};
export default App;


      //   <NavBar/>
      //   <Home/>
      //   <About />
      //   <Event />
      //   <Team /> 
      //   <Sponsor /> 
      //   <Glimpse />
      // <Signup/>
      // <Registration/>
      // <Footer />