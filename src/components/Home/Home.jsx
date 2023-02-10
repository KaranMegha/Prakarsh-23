import React,{useEffect,useRef} from "react";
import "./Home.css";
import IMG from "../../assets/logo.svg";
import Title from "../../assets/title.png";
const Home = () => {

  const vidRef = useRef(null);

  useEffect(()=>{
    handlePlayVideo();
  },[])
  const handlePlayVideo = () => {
    vidRef.current.play();
  }


  return (
    <section id="home">
      
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
          <div className="glow mx-auto d-flex align-items-center justify-content-center">
            <span class="fast-flicker glow ">co</span>mi
            <span class="flicker glow ">n</span>gs
            <span class="flicker glow ">oo</span>n
          </div>
          <div className="home__btn"></div>
        </div>

            <video 
            title="Advertisement"
            webkit-playsinline="true"
            playsinline="true"
             width="600px"
            autoplay="true"
            muted="muted"
            ref={vidRef} src={"/assests/loader.mp4"} playsInline={true}/>
         {/* <img src={IMG} alt="Muted Video" />   */}
      </div>
    </section>
  );
};

export default Home;
