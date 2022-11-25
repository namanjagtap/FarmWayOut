import React from "react"
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import DiseasesSection from "./diseasesSection"
import animalImg from "../Images/animalCow.jpg"


export default function animalHusbandary(){
    
    return (
        <div className="animalHusbandry" id="animalHusbandry">
            <h1>Animal Diseases</h1>
            <div className="animalHusbandry--main">
                <img src={animalImg} alt="Animal Cow" />
                <p>
                Animal husbandry helps in the proper management of animals by providing proper food, shelter and protection against diseases to domestic animals. It provides employment to a large number of farmer and thereby increases their living standards. It helps in developing high yielding breeds of animals by cross breeding.<br/><br/>
                Animal husbandry is the branch of agriculture concerned with animals that are raised for meat, fibre, milk, or other products. It includes day-to-day care, selective breeding, and the raising of livestock.Husbandry has a long history, starting with the Neolithic Revolution when animals were first domesticated, from around 13,000 BC onwards, predating farming of the first crops. By the time of early civilisations such as ancient Egypt, cattle, sheep, goats, and pigs were being raised on farms.
                </p>
                {/* <button>Click here to go</button> */}
            </div>
            <div>
                <button><a href="https://sample-ecru.vercel.app/">Click Here to visit animal Section »</a></button>
            </div>
            
                {/* <div>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<h1></h1>} />
                            <Route exact path="/diseasesSection" element={<DiseasesSection />} />
                        </Routes>
                        <div className="list">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/diseasesSection">section</Link></li>
                        </ul>
                        </div>
                    </Router> */}
                {/* </div> */}
        </div>
    )
}