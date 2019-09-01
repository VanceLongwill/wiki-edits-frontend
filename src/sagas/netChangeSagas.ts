import { call, put, takeEvery } from 'redux-saga/effects'
import {
  FETCH_NET_CHANGE,
  fetchNetChangeFail,
  fetchNetChangeSuccess,
  IFetchNetChange,
} from '../actions'

import { IApiResponse } from '../types'
import { getNetChange } from '../utils/api'

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
