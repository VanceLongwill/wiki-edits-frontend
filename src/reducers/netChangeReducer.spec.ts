import * as actions from '../actions'
import { defaultState, netChangeReducer } from './netChangeReducer'

describe('netChangeReducer', () => {
  it('should return the default state on an empty action', () => {
    expect(
      netChangeReducer(undefined, { type: 'unknown action type' } as any)
    ).toEqual(defaultState)
  })

  it('should set loading to true on FETCH_NET_CHANGE', () => {
    const action = actions.fetchNetChange('en', 123123, 123144)
    const res = netChangeReducer(undefined, action)
    expect(res.en['123123123144'].loading).toBe(true)
  })

  it('should handle FETCH_NET_CHANGE_FAIL correctly', () => {
    const msg = 'error msg'
    const action = actions.fetchNetChangeFail('en', 123123, 123144, msg)
    const res = netChangeReducer(
      {
        en: {
          '123123123144': {
            error: '',
            loading: true,
            from: 123123,
            to: 123144,
          },
        },
        de: {},
      },
      action
    )
    expect(res.en['123123123144'].loading).toBe(false)
    expect(res.en['123123123144'].error).toBe(msg)
  })

  it('should handle FETCH_NET_CHANGE_SUCCESS correctly', () => {
    const changeInBytes = 6789
    const action = actions.fetchNetChangeSuccess(
      'en',
      123123,
      123144,
      changeInBytes
    )
    const res = netChangeReducer(
      {
        en: {
          '123123123144': {
            error: 'SOMETHING WENT WRONG',
            loading: true,
            from: 123123,
            to: 123144,
          },
        },
        de: {},
      },
      action
    )
    expect(res.en['123123123144'].loading).toBe(false)
    expect(res.en['123123123144'].error).toBe('')
    expect(res.en['123123123144'].changeInBytes).toEqual(changeInBytes)
  })
})
