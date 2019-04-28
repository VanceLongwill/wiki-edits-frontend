import { all } from 'redux-saga/effects'
import {
  watchNetChange,
  watchPeriodicallyFetchNetChange,
} from './netChangeSagas'

function* rootSaga() {
  yield all([
    watchNetChange(),
    watchPeriodicallyFetchNetChange(),
    // more sagas here
  ])
}

export default rootSaga
