import * as React from 'react'

import { shallow } from 'enzyme'
import state from '../../__test__/stateStub'

import { EditsChart } from './EditsChart'

describe('EditsChart', () => {
  it('it should match snapshot', () => {
    const component = shallow(
      <EditsChart data={Object.values(state.netChange.en)} />
    )
    expect(component).toMatchSnapshot()
  })
})
