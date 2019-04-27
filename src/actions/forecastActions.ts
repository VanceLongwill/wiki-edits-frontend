import { IForecast } from '../types'
export const FORECAST_FETCH = 'FORECAST_FETCH'
export const FORECAST_FETCH_SUCCESS = 'FORECAST_FETCH_SUCCESS'
export const FORECAST_FETCH_FAIL = 'FORECAST_FETCH_FAIL'

export interface IForecastFetch {
  type: typeof FORECAST_FETCH
  payload: {
    city: string
  }
}

export interface IForecastFetchFail {
  type: typeof FORECAST_FETCH_FAIL
  payload: {
    error: string
  }
}

export interface IForecastFetchSuccess {
  type: typeof FORECAST_FETCH_SUCCESS
  payload: {
    result: any
  }
}

export function fetchForecast(city: string) {
  return {
    payload: { city },
    type: FORECAST_FETCH,
  }
}

export function fetchForecastFail(error: string) {
  return {
    payload: { error },
    type: FORECAST_FETCH_FAIL,
  }
}

export function fetchForecastSuccess(result: IForecast) {
  return {
    payload: { result },
    type: FORECAST_FETCH_SUCCESS,
  }
}

export type ForecastActions =
  | IForecastFetchFail
  | IForecastFetchSuccess
  | IForecastFetch
