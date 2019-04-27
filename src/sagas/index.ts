import { all } from 'redux-saga/effects'
import { watchForecast } from './forecastSagas'

function* rootSaga() {
  yield all([
    watchForecast(),
    // more sagas here
  ])
}

export default rootSaga
