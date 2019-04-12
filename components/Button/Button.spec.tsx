import { shallow } from 'enzyme'
import * as React from 'react'

import Button from './'

describe('Button', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Button buttonText="something" />)
    expect(wrapper).toBeTruthy()
  })
  it('should match snapshot', () => {
    const wrapper = shallow(<Button buttonText="something" />)
    expect(wrapper).toMatchSnapshot()
  })
})
