import * as actions from './netChangeActions'

describe('netChangeActions', () => {
  it('action creators should match snapshot', () => {
    expect(actions.fetchNetChange('en', 123233222, 123123123)).toMatchSnapshot()
    expect(
      actions.fetchNetChangeSuccess('en', 121113222, 111123123, 123123)
    ).toMatchSnapshot()
    expect(
      actions.fetchNetChangeFail('en', 123233782, 625123123, 'some error')
    ).toMatchSnapshot()
  })
})
