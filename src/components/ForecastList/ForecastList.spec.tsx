import { shallow } from 'enzyme'
import * as React from 'react'

import stateSub from '../../__test__/stateStub'
import { convertUnixTimestamp, ForecastList } from './ForecastList'

describe('ForecastList', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <ForecastList locations={stateSub.forecast.locations} />
    )
    expect(component).toMatchSnapshot()
  })
  it('should convert unix timestamps to 24 hour style strings', () => {
    const tests = [
      {
        input: 1556388000,
        output: '21:00',
      },
      {
        input: 1556400023,
        output: '00:00',
      },
    ]
    tests.forEach(test => {
      expect(convertUnixTimestamp(test.input)).toBe(test.output)
    })
  })
})
