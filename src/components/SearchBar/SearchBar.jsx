import React from "react";
import Style from "./SearchBar.module.css";
import * as axios from "axios";

const SearchBar = (props) => {

    let onChangeCity = (event) => {
      props.updateCityName(event.target.value);
    };

    let onKeySearchPress = (event) => {

        if(event.key === "Enter"){
            axios.get(`${props.API.base}weather?q=${props.city}&units=metric&APPID=${props.API.key}`)
                .then(res => props.getWeather(res.data))
                .catch(props.getWeather(undefined));
        }

    };

    return(
        <div className={Style.search_box}>
            <input
                className={Style.search_bar}
                placeholder="Search..."
                onChange={onChangeCity}
                onKeyPress={onKeySearchPress}
                value={props.city}
            />
        </div>
    );

};


export default SearchBar;
