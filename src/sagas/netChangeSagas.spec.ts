// jest.mock('../utils/api', () => {
//   const stub = require('../__test__/stateStub')
//   return {
//     filterForecastsNext24Hours: jest.fn(data => data.slice(0, 4)),
//     getForecastByCity: jest.fn(() => {
//       return Promise.resolve({
//         data: {
//           city: { name: 'London' },
//           cod: '200',
//           list: stub.forecast.locations,
//         },
//       })
//     }),
//   }
// })
// import { cloneableGenerator } from '@redux-saga/testing-utils'
//
// import stateStub from '../__test__/stateStub'
// import {
//   fetchForecast,
//   FORECAST_FETCH_FAIL,
//   FORECAST_FETCH_SUCCESS,
// } from '../actions'
// import { handleFetchForecast } from './forecastSagas'
//
// describe('forecastSagas', () => {
//   it('should handle fetchForecast correctly', () => {
//     const locationName = 'London'
//     const g = cloneableGenerator(handleFetchForecast)(fetchForecast(
//       locationName
//     ) as any)
//     let next = g.next()
//     expect(next.value.payload.args[0]).toBe(locationName)
//     const gClone = g.clone()
//     const gErrClone = g.clone()
//
//     const payloadData = {
//       city: { name: stateStub.forecast.locations[0].displayName },
//       list: stateStub.forecast.locations[0].list,
//     }
//     next = g.next({ data: { cod: '200', ...payloadData } })
//     expect(next.value.payload.action.type).toBe(FORECAST_FETCH_SUCCESS)
//
//     next = gClone.next({ data: { code: '404', message: 'failed' } })
//     expect(next.value.payload.action.type).toBe(FORECAST_FETCH_FAIL)
//
//     next = gErrClone.next()
//     expect(next.value.payload.action.type).toBe(FORECAST_FETCH_FAIL)
//     expect(next.value.payload.action.payload.error).toBe(
//       `Cannot read property 'data' of undefined`
//     )
//   })
// })
