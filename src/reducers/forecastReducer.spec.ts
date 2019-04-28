//import {
//  fetchForecast,
//  fetchForecastFail,
//  fetchForecastSuccess,
//} from '../actions'
//import { defaultState, forecastReducer } from './netChangeReducer'
//
//import stateStub from '../__test__/stateStub'
//
//describe('forecastReducer', () => {
//  it('should return the default state on an empty action', () => {
//    expect(
//      forecastReducer(undefined, { type: 'unknown action type' } as any)
//    ).toEqual(defaultState)
//  })
//
//  it('should set loading to true on FORECAST_FETCH', () => {
//    const action = fetchForecast('London')
//    const res = forecastReducer(undefined, action as any)
//    expect(res.loading).toBe(true)
//  })
//
//  it('should handle FORECAST_FETCH_FAIL correctly', () => {
//    const msg = 'error msg'
//    const action = fetchForecastFail(msg)
//    const res = forecastReducer(
//      {
//        error: false,
//        errorMsg: '',
//        loading: true,
//        locations: [],
//      },
//      action as any
//    )
//    expect(res.loading).toBe(false)
//    expect(res.errorMsg).toBe(msg)
//  })
//
//  it('should handle FORECAST_FETCH_SUCCESS correctly', () => {
//    const location = stateStub.forecast.locations[0]
//    const action = fetchForecastSuccess(location)
//    const res = forecastReducer(
//      {
//        error: false,
//        errorMsg: '',
//        loading: true,
//        locations: [{} as any],
//      },
//      action as any
//    )
//    expect(res.loading).toBe(false)
//    expect(res.locations[1]).toEqual(location)
//  })
//})
