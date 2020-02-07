import React from 'react';
import './App.css';
import Form from "./components/Form";
import WeatherNow from "./components/Weather";
import WeatherDisplay from "./components/weather_display/WeatherDisplay";
import WeatherBar from "./components/weather_bar/WeatherBar";


const API_KEY = 'a29f5016da9a1b10d4c9971db54fd01e';       //апишка

class App extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        isSuccess: undefined,
        error: undefined
    };
    test = false;
    getCity = async (e) => {   //метод для получения названия города введенного пользователем в форму
        e.preventDefault();
        let city = e.target.elements.city.value;  //получаем город который пользователь ввел в строку

        await this.getWeatherNow(await this.getData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`));
        await this.getWeatherOnWeek(await this.getData(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`));

    };


    getWeatherNow = (data) => {  //получаем погоду сейчас
        console.log(data);
        let error = this.isError(data.cod); //проверяем data на наличиие кодов ошибки

        if (!error) {
            this.setState(
                {
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    errorMessage: undefined,
                    isSuccess: true

                });

        } else {
            this.setState({
                isSuccess: false,
                error: error,
            });
        }

    };


    isError = (code) => {   //сервер вернет 404 - значит город не найден, если 400, значит строка была пустая

        if (code === '400') {      //если ответ был 400, записываем в состояние ошибку

            return 'Ведите название города';

        } else if (code === '404') {       //если ответ был 404, записываем в состояние ошибку

            return 'Город не найден =(';

        }
        this.test = true;
        return '';
    };


    getData = async (response) => {     //делаем асинхронный запрос погоды на сервер
        let api_url = await fetch(response);        //получаем ответ от сервера
        return await api_url.json();        //парсим ответ из json
    };

    getWeatherOnWeek = (data) => {  //получаем погоду на 5 дней вперед
        console.log(data);

    };


    render() {
        return (
            <div className="App">
                <h1>Погода</h1>
                <Form weatherMethod={this.getCity}/>
                {this.test && <WeatherBar/> }
            </div>

        );
    }


}

export default App;
