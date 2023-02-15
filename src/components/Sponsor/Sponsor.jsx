import Carousel from "react-bootstrap/Carousel";
import "./Sponsor.css";

function Sponsor() {
  return (
    <section id="sponser">
      <div className="heading">
        <h2
          className="abouthead"
          // data-aos="zoom-out"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-out"
          // data-aos-delay="500"
        >
          Sponser
        </h2>
        <h2 className="front-text"> Sponsor</h2>
      </div>
      <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto c-block"
          src="assests/Sponsor/TITLE.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/POWEREDBY-SPONSOR.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/Platinum.svg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/GOLD-SPONSOR.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/SILVER-SPONSOR.png"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="mx-auto d-block"
          src="assests/Sponsor/BRONZE-SPONSOR.png"
          alt="Sixth slide"
        />
      </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Sponsor;
