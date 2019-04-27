import {
  FORECAST_FETCH,
  FORECAST_FETCH_FAIL,
  FORECAST_FETCH_SUCCESS,
  ForecastActions,
} from '../actions'
import { IForecastState } from '../types'

export const defaultState: IForecastState = {
  error: false,
  errorMsg: '',
  loading: false,
  locations: [],
}

export function forecastReducer(
  state: IForecastState = defaultState,
  action: ForecastActions
) {
  switch (action.type) {
    case FORECAST_FETCH:
      return { ...state, loading: true }

    case FORECAST_FETCH_FAIL:
      return {
        ...state,
        error: true,
        errorMsg: action.payload.error,
        loading: false,
      }

    case FORECAST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        locations: [...state.locations, action.payload.result],
      }

    default:
      return state
  }
}
