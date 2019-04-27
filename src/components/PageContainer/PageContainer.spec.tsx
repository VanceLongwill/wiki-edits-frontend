import { shallow } from 'enzyme'
import * as React from 'react'

import { PageContainer } from './PageContainer'

describe('PageContainer', () => {
  it('it should match snapshot', () => {
    const component = shallow(<PageContainer />)
    expect(component).toMatchSnapshot()
  })
})
