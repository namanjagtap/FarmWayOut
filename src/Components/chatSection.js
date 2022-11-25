import React from "react"
import connectImg from "../Images/connect.png"

export default function chatSection(){
    return(
        <div className="chatSection" id="chatSection">
            <h1>Connect with our Experts</h1>
            <div className="chatSection--main">
                <div>
                    <p>Connect direct to Doctors. This is here we connect you to our experts/doctors to solve your problem right at your PC. Ask your quries with experts and get the best solution.</p>
                    <button><a href="http://localhost:3002/">Connect »</a></button>
                </div>
                <img src={connectImg} alt="connect with us" />
            </div>
            <div className="chatSection--sidebar">
            </div>
        </div>
    )
}