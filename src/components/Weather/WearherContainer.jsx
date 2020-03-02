import React from "react";
import {connect} from "react-redux";
import Weather from "./Weather";

let mapStateToProps = (state) => {
  return{
      bg_img_switch_temp: state.weather.temp,
      status: state.status,
  }
};

const WeatherContainer = connect(mapStateToProps)(Weather);

export default WeatherContainer;