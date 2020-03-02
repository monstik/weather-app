import React from "react";
import WeatherDisplayLocationBox from "./WeatherDisplayLocation/WeatherDisplayLocationBox";
import WeatherDisplayBox from "./WearherDisplayBox/WeatherDisplayBox";

const WeatherDisplay = (props) => {
    return (
        <div>
            <WeatherDisplayLocationBox location={props.location} date={props.date} status={props.status}/>
            <WeatherDisplayBox temp={props.temp} weather_conditions={props.weather_conditions} status={props.status}/>
        </div>
    );

};

export default WeatherDisplay;