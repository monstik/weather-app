import React from "react";
import Style from "./WeatherDisplayBox.module.css"

const WeatherDisplayBox = (props) => {
    return (
        <div>
            {props.status !== undefined &&
            <div className={Style.weather_box}>
                <div className={Style.temp}>
                    {props.temp}°C
                </div>
                <div className={Style.weather}>
                   {props.weather_conditions}
                </div>
            </div>}
        </div>
    );
};

export default WeatherDisplayBox;