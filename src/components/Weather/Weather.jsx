import React from "react";
import Style from "./Weather.module.css"
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import WeatherDisplayContainer from "../WeatherDisplay/WeatherDisplayContainer";

const Weather = (props) => {
    return(
        <div className={props.status === undefined  ? Style.app : (props.bg_img_switch_temp > 16 ? Style.app + " " + Style.warm : Style.app)}>
            <div className={Style.main}>
                <SearchBarContainer/>
                <WeatherDisplayContainer/>
            </div>
        </div>
    );
};

export default Weather;