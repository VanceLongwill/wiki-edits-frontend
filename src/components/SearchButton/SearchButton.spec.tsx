import { shallow } from 'enzyme'
import * as React from 'react'

import { SearchButton } from './SearchButton'

describe('SearchButton', () => {
  it('should render without error', () => {
    const wrapper = shallow(<SearchButton buttonText="something" />)
    expect(wrapper).toBeTruthy()
  })
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchButton buttonText="something" />)
    expect(wrapper).toMatchSnapshot()
  })
})
