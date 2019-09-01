jest.mock('../utils/api', () => {
  return {
    getNetChange: jest.fn(() => {
      return Promise.resolve({
        data: {
          changeInBytes: 444,
        },
      })
    }),
  }
})
import { cloneableGenerator } from '@redux-saga/testing-utils'

import * as actions from '../actions'
import { handleFetchNetChange } from './netChangeSagas'

describe('netChangeSagas', () => {
  it('should handle fetchNetChange correctly', () => {
    const g = cloneableGenerator(handleFetchNetChange)(
      actions.fetchNetChange('en', 123123, 123444)
    )
    let next = g.next()
    expect(next.value.payload.args[0]).toBe('en')
    const gClone = g.clone()
    const gErrClone = g.clone()

    next = g.next({ data: { netChange: 987987 } })
    expect(next.value.payload.action.type).toBe(
      actions.FETCH_NET_CHANGE_SUCCESS
    )

    next = gClone.next({ data: { code: '404', message: 'failed' } })
    expect(next.value.payload.action.type).toBe(actions.FETCH_NET_CHANGE_FAIL)

    next = gErrClone.next()
    expect(next.value.payload.action.type).toBe(actions.FETCH_NET_CHANGE_FAIL)
    expect(next.value.payload.action.payload.error).toBe(
      `Cannot read property 'data' of undefined`
    )
  })
})
