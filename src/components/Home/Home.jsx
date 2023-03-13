import React,{useEffect,useState, useRef} from "react";
import "./Home.css";
import IMG from "../../assets/logo.svg";
import Title from "../../assets/title.png";
import { NavBar } from "../Nav/NavBar";
import Counter from "../Counter/Counter";
const Home = () => {
  const [curdate, setCurdate] = useState(new Date().toLocaleDateString());
  const vidRef = useRef(null);

  useEffect(()=>{
    handlePlayVideo();
  },[])
  const handlePlayVideo = () => {
    vidRef.current.play();
  }


  return (
    
    <section id="home">
      {/* <NavBar/> */}
      <div className="container home__container">
        <div className="home__content">
          <div className="home__title">
            <img src={Title} alt='title'/>
          </div>
          <p>
            Prakarsh ‘23’s vision is to assist the rural areas, and villages and
            to encourage them in the advancement of their lives through
            technologies developed in Prakarsh by students.{" "}
          </p>
          <div className="icon  mx-auto d-flex align-items-center justify-content-center">
            {/* <a href="#event">explore events</a> */}
            <Counter
          date={"05 April, 2023"}
          currentDate={curdate}
        />
          </div>
          <div className="home__btn"></div>
        </div>
    <div className="video mx-auto d-flex align-items-center justify-content-center">
    <video 
            title="Advertisement"
            webkit-playsinline="true"
            playsinline="true"
             width="700px"
            autoplay="true"
            muted="muted"
            ref={vidRef} src={"/assests/loader.mp4"} playsInline={true}/>
    </div>
            
         {/* <img src={IMG} alt="Muted Video" />   */}
      </div>
    </section>
  );
};

export default Home;
