import { shallow } from 'enzyme'
import * as React from 'react'

import { Search } from './Search'

describe('Search', () => {
  it('should match snapshot', () => {
    const component = shallow(
      <Search handleSubmit={jest.fn()} loading={false} />
    )
    expect(component).toMatchSnapshot()
  })

  it('button should be disabled while loading', () => {
    const component = shallow(
      <Search handleSubmit={jest.fn()} loading={true} />
    )

    expect(component.find('Button').prop('disabled')).toBe(true)
  })

  it('should call handleSubmit when button is pressed', () => {
    const spy = jest.fn()
    const component = shallow(<Search handleSubmit={spy} loading={false} />)
    component.find('Button').simulate('click')
    expect(spy.mock.calls.length).toBe(1)
  })
})
