import axios from 'axios'

const API_KEY_WEATHER = 'aebb13fe929de5b1d6b3355ef5dc181c'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_WEATHER}`

export function getWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    return {
        type: 'GET_WEATHER',
        payload: request
    }
}
