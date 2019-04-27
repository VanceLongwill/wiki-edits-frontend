import {
  fetchForecast,
  fetchForecastFail,
  fetchForecastSuccess,
} from './forecastActions'
describe('forecast actions', () => {
  it('action creators should match snapshot', () => {
    expect(fetchForecast('London')).toMatchSnapshot()
    expect(fetchForecastFail('some error')).toMatchSnapshot()
    expect(
      fetchForecastSuccess({ displayName: 'something' } as any)
    ).toMatchSnapshot()
  })
})
