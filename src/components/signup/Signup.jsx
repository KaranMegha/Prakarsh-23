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
                <div className="rect" />
                  
              <input type="email" placeholder=' Enter your Email'  required="required" />
            </div>
            <button className="btnprimary">
            Get Link
            <div className="sbtn" />
          
</button>

            </div>
              
    </div>
  )
}

export default Signup