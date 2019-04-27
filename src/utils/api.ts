import axios from 'axios'
import { IApiResponse, IForecast } from '../types'

// NB: in production API_KEY should be kept out of the codebase using a .env file or env variable
const API_KEY = 'a73e8c027d85e30aef330275e41149ce'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'

export function getForecastByCity(name: string, countryCode: string = '') {
  const params = {
    appid: API_KEY,
    q: countryCode ? [name, countryCode] : name,
    units: 'metric',
  }
  return axios.get<IApiResponse>(`${BASE_URL}`, { params })
}

export function filterForecastsNext24Hours(
  data: IApiResponse['list']
): IForecast['list'] {
  const comparisonDate = new Date()
  comparisonDate.setDate(comparisonDate.getDate() + 1) // set date to same time tomorrow i.e. next 24 hours
  const tomorrow = Math.floor(comparisonDate.getTime() / 1000) // get unix timestamp to compare
  return data.filter(item => item.dt <= tomorrow)
}
