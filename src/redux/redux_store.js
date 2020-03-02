import {createStore} from "redux";
import weather_reducer from "./weather_reducer";


let store = createStore(weather_reducer);


export default store;
