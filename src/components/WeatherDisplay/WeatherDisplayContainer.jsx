import React from "react";
import {connect} from "react-redux";
import WeatherDisplay from "./WeatherDisplay";


let mapStateToProps = (state) => {
    return {
        location: state.weather.location,
        date: state.weather.date,
        status: state.status,
        temp: state.weather.temp,
        weather_conditions: state.weather.weather_conditions,
    };

};

const WeatherDisplayContainer = connect(mapStateToProps)(WeatherDisplay);

export default WeatherDisplayContainer;