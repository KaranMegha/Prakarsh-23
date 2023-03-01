import React from 'react'
import './ParticularEventPage.css'
import workshopimg from '../../assests/Events/ws.png'
import workshopimg1 from '../../assests/Events/ws.png'
const ParticularEventPage = () => {
  return (
    <div>
    <h1>WORKSHOP</h1>
      <div className="ParticularEventPageDiv">
        <div  className="displayimgdiv"><img src={workshopimg}/></div>
          {/*<img src={workshopimg1} className='displayimg'/>*/}
        <div className="rightdiv">
        <div className="EventDisc">
            <div className="div">
              <h2>Round 1:</h2>
              <div className="disc"><p>We bring a new twist to coding! Tag along with your friend and code like you never did. The main theme of this event is Coding.</p></div>
            </div>
            <div className="div">
              <div><h2>Round 2:</h2></div>
              <div className="disc"><p>We bring a new twist to coding! Tag along with your friend and code like you never did. The main theme of this event is Coding.</p></div>
            </div>
            <div className="div">
              <div><h2>Round 3:</h2></div>
              <div className="disc"><p>We bring a new twist to coding! Tag along with your friend and code like you never did. The main theme of this event is Coding.</p></div> </div>
        </div>
        <div className="bottomdiv">
          <h2>₹150/person</h2>
          <button><p>Participate Now</p></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ParticularEventPage;