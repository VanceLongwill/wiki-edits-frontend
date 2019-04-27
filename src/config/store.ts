import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

export function makeStore(preloadedState: any) {
  const sagaMiddleware = createSagaMiddleware()

  let composeEnhancers = compose

  // tslint:disable-next-line strict-type-predicates
  if (typeof window !== 'undefined') {
    composeEnhancers =
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  const store = createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    )

    /*
     * next-redux-saga depends on `sagaTask` being attached to the store.
     * It is used to await the rootSaga task before sending results to the client.
     */
  ;(store as any).sagaTask = sagaMiddleware.run(rootSaga)

  return store
}
