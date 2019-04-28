import { combineReducers } from 'redux'

import { netChangeReducer } from './netChangeReducer'

export default combineReducers({
  netChange: netChangeReducer,
})
