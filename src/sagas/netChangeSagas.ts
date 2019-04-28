import { call, delay, put, takeEvery, takeLeading } from 'redux-saga/effects'
import {
  FETCH_NET_CHANGE,
  fetchNetChange,
  fetchNetChangeFail,
  fetchNetChangeSuccess,
  IFetchNetChange,
  IPeriodicallyFetchNetChange,
  PERIODICALLY_FETCH_NET_CHANGE,
} from '../actions'

import { IApiResponse } from '../types'
import { getNetChange } from '../utils/api'
import { dateToUnix } from '../utils/time'

export function* handleFetchNetChange(action: IFetchNetChange) {
  const { langCode, from, to } = action.payload
  try {
    const res = yield call(getNetChange, langCode, from, to)
    const data: IApiResponse = res.data

    if (!data.netChange) {
      throw new Error(`Net change undefined in payload`)
    }

    yield put(fetchNetChangeSuccess(langCode, from, to, data.netChange))
  } catch (e) {
    yield put(fetchNetChangeFail(langCode, from, to, e.message as string))
  }
}

export function* watchNetChange() {
  yield takeEvery(FETCH_NET_CHANGE, handleFetchNetChange)
}

export function* periodicallyFetchNetChange(
  action: IPeriodicallyFetchNetChange
) {
  while (true) {
    const dateNow = new Date()
    const from = dateToUnix(
      new Date(dateNow.getTime() - action.payload.intervalMs * 1000)
    )
    const to = dateToUnix(dateNow)
    yield put(fetchNetChange(action.payload.langCode, from, to))
    yield delay(action.payload.intervalMs * 1000)
  }
}

export function* watchPeriodicallyFetchNetChange() {
  yield takeLeading(PERIODICALLY_FETCH_NET_CHANGE, periodicallyFetchNetChange)
}
