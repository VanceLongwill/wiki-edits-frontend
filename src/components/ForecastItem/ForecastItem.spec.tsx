import { shallow } from 'enzyme'
import * as React from 'react'

import { ForecastItem, formatTemperature } from './ForecastItem'

import stateSub from '../../__test__/stateStub'

describe('ForecastItem', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <ForecastItem data={stateSub.forecast.locations[0]} />
    )
    expect(component).toMatchSnapshot()
  })

  it('should render the correct number of cells', () => {
    const stubLocation = stateSub.forecast.locations[0]
    const component = shallow(<ForecastItem data={stubLocation} />)
    expect(component.find('td')).toHaveLength(stubLocation.list.length + 1)
  })

  it('formatTemperature should format temperatures correctly', () => {
    const tests = [
      {
        input: 14.76,
        output: '15°C',
      },
      {
        input: 1.01,
        output: '1°C',
      },
    ]

    tests.forEach(test => {
      expect(formatTemperature(test.input)).toBe(test.output)
    })
  })
})
