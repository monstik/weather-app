const UPDATE_CITY_FIELD = "UPDATE-CITY-FIELD";
const GET_WEATHER = "GET-WEATHER";

const initialState = {
    API: {
        key: "b71a3bf98a509019b0984b55ad712905",
        base: "https://api.openweathermap.org/data/2.5/"
    },
    weather: {
        main: undefined,
        location: {
            city: '',
            country: '',
        },
        date: '',
        temp: '',
        weather_conditions: '',
    },
    city: '',
    status: undefined,
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CITY_FIELD:
            return {...state, city: action.city};
        case GET_WEATHER:
            if (action.response) {
                return {
                    ...state,
                    weather: {
                        ...state.weather,
                        location: {
                            city: action.response.name,
                            country: action.response.sys.country,
                        },
                        date: dateBuilder(new Date),
                        temp: Math.round(action.response.main.temp),
                        weather_conditions: action.response.weather[0].main
                    },
                    city: '',
                    status: 'ok'
                };
            } else {
                return {...state, status: undefined}
            }

        default :
            return {...state};
    }
};


const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
};

export const updateCityFieldAC = (cityName) => ({type: UPDATE_CITY_FIELD, city: cityName});
export const getWeatherAC = (response) => ({type: GET_WEATHER, response: response});

export default weather_reducer;


