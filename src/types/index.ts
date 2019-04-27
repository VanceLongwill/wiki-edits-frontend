/*
 * Redux state
 */
export interface IState {
  forecast: IForecastState
}

export interface IForecastState {
  loading: boolean
  error: boolean
  errorMsg: string
  locations: IForecast[]
}

export interface IForecast {
  displayName: string
  list: IListItem[]
}

/*
 * https://openweathermap.org/forecast5 API RESPONSE
 */
export interface IApiResponse {
  cod: string
  message: number | string
  cnt: number
  list: IListItem[]
  city: ICity
}
export interface IListItem {
  dt: number
  main: IMain
  weather: IWeatherItem[]
  clouds: IClouds
  wind: IWind
  sys: ISys
  dt_txt: string
}
export interface IMain {
  temp: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}
export interface IWeatherItem {
  id: number
  main: string
  description: string
  icon: string
}
export interface IClouds {
  all: number
}
export interface IWind {
  speed: number
  deg: number
}
export interface ISys {
  pod: string
}
export interface ICity {
  id: number
  name: string
  coord: ICoord
  country: string
  population: number
}
export interface ICoord {
  lat: number
  lon: number
}
