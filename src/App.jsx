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
import { render } from "@testing-library/react";
import Signup from "./components/Signup/Signup";
const App = () => {

  return (
    <div >
        {/* <div className="loader" ref={divRef}>
        </div> */}
        <NavBar/>
        <Home/>
        <About />
        {/* <Event /> */}
        {/* <Team /> */}
        {/* <Sponsor /> */}
        <Signup/>
        <Glimpse />
        <Footer />
    </div>
  );
};
export default App;
