import React, { useEffect, useState } from "react"
import NavSection from "./Components/NavSection"
import AboutUs from "./Components/aboutUs"
import AnimalHusbandary from "./Components/animalHusbandry"
import ChatSection from "./Components/chatSection"
import DiseasesSection from "./Components/diseasesSection"
import Weather from "./Components/weather"
import locImg from "./Images/location.png" 
import Footer from "./Components/footer"

export default function App(){

    const [info, setInfo] = useState([])
    const [weatherDetail, setWeatherDetail] = useState([])

    const getData1 = () => {
        fetch('WeatherData.json'
        ,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(myjson => setWeatherDetail(myjson))
    }
    
    const getData = () => {
        fetch('Data.json'
        ,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(myJson => setInfo(myJson))
    }
    useEffect(() => {
        getData1();
        getData();
    }, [])
    console.log(info)
    // console.log(weatherDetail)
    
    return (
        <>
            <NavSection />
            <AboutUs />
            <AnimalHusbandary />
            {/* {info.map(item => <DiseasesSection item={item} />)} */}
            <ChatSection />
            <div className="weather--main">
                <h1>Weather Details</h1>
                <div>
                    <p>Location: Nagda<br/>
                        Change Location here
                        <a href="error">
                            <img src={locImg} style={ {width: "15px", margin: "0px"}} alt="Loaction"/>
                        </a>
                    </p>
                </div>
                {weatherDetail.map(detail => <Weather detail={detail} />)}
            </div>
            <Footer />
        </>
    )
}