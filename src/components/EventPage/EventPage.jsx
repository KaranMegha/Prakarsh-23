import React from 'react'
import './EventPage.css'
import workshopimg from "./../../assets/ws.png"
const EventPage = () => {
  return (
    <div id='eventpage' className="EventPagebody">
        <div className='workshops row'>
            <div className='col-lg-6 d-flex justify-content-center'><img className="workshopimg" src={workshopimg}/></div>
            <div className="col-lg-6 about">
                <h1>Workshop</h1>
                <p className='p'>We bring a new twist to coding! Tag along with your friends and code like you never did. The main theme of this event is Coding.
                  </p>
            </div>
        </div>


        {/* <div className='workshops'>
           
            <div className="about">
                <h1>Workshop</h1>
                <p className='p'>workshop
                        We bring a new twist to coding! Tag along with your friends and code like you never did. The main theme of this event is Coding.
                  </p>
            </div>
             <img className="workshopimg" src={workshopimg}/>

        </div>


        <div className='workshops'>
            <img className="workshopimg" src={workshopimg}/>

            <div className="about">
                <h1>Workshop</h1>
                <p className='p'>workshop
                        We bring a new twist to coding! Tag along with your friends and code like you never did. The main theme of this event is Coding.
                  </p>
            </div>
        </div> */}

    </div>
    
  )
}

export default EventPage