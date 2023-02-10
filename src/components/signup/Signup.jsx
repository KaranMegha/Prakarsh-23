import React from 'react'
import './Signup.css'
const Signup = () => {
  return (

    <div className="signup" id="sign">
            <div className="shead">
               <h1> SIGN UP</h1>
               <p> Sign in now and register for upcoming events and <br/>
                     future announcements.</p>
            </div>
            <div className="scontent">
                <div className="inputbox">
              <input type="email"  required="required" />
              <span>
                Email
                
                <div className="rect" />
              </span>
            </div>

            <div className="sbtn" >
              <button className="btn btn-primary">
                Get Link
              {/* <div className="rect2"/> */}
              
              </button>
      </div>

            </div>
              
    </div>
  )
}

export default Signup