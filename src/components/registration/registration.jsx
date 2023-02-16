import React from 'react'
import './registration.css'

const registration = () => {
  return (
    
    <div className="registration">

        <div className="rhead">
        <h1> Registration </h1>
        </div>
        
    
    

    <div className="rcontent">  
        <div className="first">

        <div className="inputbox  ">
                    <div className="rect" />
                     <input type="text" placeholder=' First name'  required="required" />
            </div>

            <div className="inputbox">
                     <div className="rect" />
                    <input type="text" placeholder=' Last name'  required="required" />
            </div>
        </div>
         <div className="second">

           <div className="try">

                <div className="inputbox pad ">
                    <div className="rect r-rect" />
                    <input type="email" placeholder=' email'  required="required" />
                </div>

                 <div className="inputbox pad">
                    <div className="rect r-rect" />
                <input type="text" placeholder=' phone Number'  required="required" />
                    </div>

                <div className="inputbox pad">
                    <div className="rect r-rect" />
                <input type="text" placeholder=' College name'  required="required" />
                </div>

             </div>
         </div>
            
        <div className="third">

              <div className="try-2">
                  <div className="inputbox pad ">
                        <div className="rect r-rect" />
                       <input type="text" placeholder=' Department'  required="required" />
                     </div>

                <div className="inputbox pad">
                        <div className="rect r-rect" />
                    <input type="text" placeholder='YEAR'  required="required" />
                 </div>
              </div>
          
        </div>
           
        {/* <button className="btnprimary r-rect ">
            Get Link
            <div className="sbtn " />
          
        </button> */}



    </div> 

             </div> 
  )
}

export default registration