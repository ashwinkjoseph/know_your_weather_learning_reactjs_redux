    import axios from 'axios';

    export const FETCH_WEATHER = 'FETCH_WEATHER';
    
    const API_KEY = '60123554b3c04dc9946f47754d57e13d';
    const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

    export const forecastWeather = city=>{
        const url= `${BASE_URL}&q=${city},us`;
        const request= axios.get(url);
        console.log(request);
        return {
            type: FETCH_WEATHER,
            payload: request
        }
    }