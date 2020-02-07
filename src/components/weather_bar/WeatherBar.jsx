import React from "react";
import WeatherBarModule from "./WeatherBar.module.css"
import WeatherCard from "../weather_card/WeatherCard";
import WeatherDisplay from "../weather_display/WeatherDisplay";


let WeatherBar = (props) => {
    return (
        <div className={WeatherBarModule.card_wrapper}>
            <div>
                <WeatherDisplay/>
            </div>
            <div className={WeatherBarModule.cards}>
                <div className={WeatherBarModule.rowContainer}>
                        <WeatherCard/>
                        <WeatherCard/>
                        <WeatherCard/>
                </div>

                <div className={WeatherBarModule.rowContainer}>
                        <WeatherCard/>
                        <WeatherCard/>
                </div>
            </div>

        </div>
    );


};

export default WeatherBar;