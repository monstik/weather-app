import React from "react";
import {connect} from "react-redux";
import SearchBar from "./SearchBar";
import {getWeatherAC, updateCityFieldAC} from "../../redux/weather_reducer";



let mapStateToProps = (state) => {
    return{
        city: state.city,
        API: state.API,
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateCityName: (cityName) => {
            dispatch(updateCityFieldAC(cityName));
        },
        getWeather: (key) => {
            dispatch(getWeatherAC(key));
        }
    }
};

const SearchBarContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar);

export default SearchBarContainer;