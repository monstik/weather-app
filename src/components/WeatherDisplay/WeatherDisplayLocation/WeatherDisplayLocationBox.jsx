import React from "react";
import Style from "./WeatherDisplayLocation.module.css"

const WeatherDisplayLocationBox = (props) => {
    return(
        <div>
        {props.status !== undefined &&
            <div className={Style.location_box}>

                <div className={Style.location}>
                    {props.location.city}, {props.location.country}
                </div>
                <div className={Style.date}>
                    {props.date}
                </div>

            </div>
        }
        </div>
    );
};

export default WeatherDisplayLocationBox;