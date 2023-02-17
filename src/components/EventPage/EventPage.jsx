import React from 'react'
import './EventPage.css'
import workshopimg from '../../assets/workshopimg.svg'
const EventPage = () => {
  return (
    <div className="EventPagebody">
        <div className='workshops'>
            <div><img className="workshopimg" src={workshopimg}/></div>
            <div className="about">
                <h1>Workshop</h1>
                <p>We bring a new twist to coding! Tag along with your friends and code like you never did. The main theme of this event is Coding.
                  </p>
            </div>
        </div>


        <div className='workshops'>
           
            <div className="about">
                <h1>Workshop</h1>
                <p>workshop
                        We bring a new twist to coding! Tag along with your friends and code like you never did. The main theme of this event is Coding.
                  </p>
            </div>
             <img className="workshopimg" src={workshopimg}/>

        </div>


        <div className='workshops'>
            <img className="workshopimg" src={workshopimg}/>

            <div className="about">
                <h1>Workshop</h1>
                <p>workshop
                        We bring a new twist to coding! Tag along with your friends and code like you never did. The main theme of this event is Coding.
                  </p>
            </div>
        </div>

    </div>
    
  )
}

export default EventPage