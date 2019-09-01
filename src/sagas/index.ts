import { all } from 'redux-saga/effects'
import { watchNetChange } from './netChangeSagas'

function* rootSaga() {
  yield all([
    watchNetChange(),
    // more sagas here
  ])
}

export default rootSaga
