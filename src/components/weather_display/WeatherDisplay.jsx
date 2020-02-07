import React from "react";
import test from "./WeatherDisplay.module.css"
import test2 from "../weather_bar/WeatherBar.module.css"

let WeatherDisplay = (props) => {
    return(
        <div className={test2.display}>
            <div className={test.weather_display}>
            <h1>WeatherDisplay</h1>

            </div>
        </div>
    );
};

export default WeatherDisplay;