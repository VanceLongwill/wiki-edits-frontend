import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchForecastFail,
  fetchForecastSuccess,
  FORECAST_FETCH,
  IForecastFetch,
} from '../actions'

import { IApiResponse } from '../types'
import { filterForecastsNext24Hours, getForecastByCity } from '../utils/api'

export function* handleFetchForecast(action: IForecastFetch) {
  try {
    const res = yield call(getForecastByCity, action.payload.city)
    const data: IApiResponse = res.data

    if (data.cod !== '200') {
      throw new Error(data.message as string)
    }

    yield put(
      fetchForecastSuccess({
        displayName: `${data.city.name}, ${data.city.country}`,
        list: filterForecastsNext24Hours(data.list),
      })
    )
  } catch (e) {
    yield put(fetchForecastFail(e.message as string))
  }
}

export function* watchForecast() {
  yield takeEvery(FORECAST_FETCH, handleFetchForecast)
}
