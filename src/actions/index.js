import axios from 'axios'

const API_KEY="c94164fd8fc2a109f6909db1cd8c6e18"
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},gb`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
