import React from "react";

let WeatherNow = (props) => {

        return (
            <div>
                {props.isSuccess ?      //если запрос вернул данные то выводим погоду
                <div>
                    <p>Температура: {props.temp}</p>
                    <p>Восхож солнца: {props.sunrise}</p>
                    <p>Заход солнца: {props.sunset}</p>
                    <p>Местоположение: {props.city}, {props.country}</p>
                </div>
                    :       // в противном случае выводим компонент с ошибкой
                <p>{props.error}</p>
                }
            </div>
        );


};

export default WeatherNow;