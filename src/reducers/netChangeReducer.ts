import {
  FETCH_NET_CHANGE,
  FETCH_NET_CHANGE_FAIL,
  FETCH_NET_CHANGE_SUCCESS,
  NetChangeActions,
} from '../actions'
import { INetChangeState } from '../types'

export const defaultState: INetChangeState = {
  en: {},
  de: {},
}

export function netChangeReducer(
  state: INetChangeState = defaultState,
  action: NetChangeActions
) {
  switch (action.type) {
    case FETCH_NET_CHANGE: {
      const { langCode, from, to } = action.payload
      const timestamps = `${from}${to}`
      return {
        ...state,
        [langCode]: {
          ...state[langCode],
          [timestamps]: {
            ...state[langCode][timestamps],
            error: '',
            loading: true,
            to: action.payload.to,
            from: action.payload.from,
          },
        },
      }
    }

    case FETCH_NET_CHANGE_FAIL: {
      const { langCode, from, to } = action.payload
      const timestamps = `${from}${to}`
      return {
        ...state,
        [langCode]: {
          ...state[langCode],
          [timestamps]: {
            ...state[langCode][timestamps],
            error: action.payload.error,
            loading: false,
          },
        },
      }
    }

    case FETCH_NET_CHANGE_SUCCESS: {
      const { langCode, from, to } = action.payload
      const timestamps = `${from}${to}`
      return {
        ...state,
        [langCode]: {
          ...state[langCode],
          [timestamps]: {
            ...state[langCode][timestamps],
            error: '',
            loading: false,
            changeInBytes: action.payload.changeInBytes,
          },
        },
      }
    }

    default:
      return state
  }
}
