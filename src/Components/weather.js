import React from "react"

export default function weather(props){
    return(
        <div className="weather" id="weather">
            <h5>{props.detail.date}</h5>
            <div>
                <p className="weather--tempC">Temperature {props.detail.temperatureC}°C</p>
                <p className="weather--tempF">Temperature {props.detail.temperatureF} F</p>
                <p className="weather--summary">{props.detail.summary}</p>
            </div>
        </div>
    )
}