import Head from 'next/head'
import * as React from 'react'
import { connect } from 'react-redux'
import { Store } from 'redux'

import ForecastList from '../src/components/ForecastList'
import PageContainer from '../src/components/PageContainer'
import Search from '../src/components/Search'

import { fetchForecast, fetchForecastSuccess } from '../src/actions'
import { IForecastState, IState } from '../src/types'
import { filterForecastsNext24Hours, getForecastByCity } from '../src/utils/api'

interface IAppProps {
  error: IForecastState['error']
  errorMsg: IForecastState['errorMsg']
  loading: IForecastState['loading']
  locations: IForecastState['locations']
  handleFetchForecast: (query: string) => {}
}

class App extends React.Component<IAppProps> {
  public static async getInitialProps({
    store,
    isServer,
  }: {
    store: Store<IState>
    isServer: boolean
  }) {
    if (isServer) {
      // @TODO: get initial forecast based on req geolocation
      const result = await getForecastByCity('London')
      store.dispatch(
        fetchForecastSuccess({
          displayName: result.data.city.name,
          list: filterForecastsNext24Hours(result.data.list),
        })
      )
    }
  }

  public render() {
    const { loading, handleFetchForecast, locations } = this.props
    return (
      <PageContainer>
        <Head>
          <title>Weather App</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <h1>24 hours weather forecast</h1>
        <Search loading={loading} handleSubmit={handleFetchForecast} />
        <ForecastList locations={locations} />
      </PageContainer>
    )
  }
}

function mapStateToProps(state: IState) {
  return {
    error: state.forecast.error,
    errorMsg: state.forecast.errorMsg,
    loading: state.forecast.loading,
    locations: state.forecast.locations,
  }
}

const actionCreators = {
  handleFetchForecast: fetchForecast,
}

export default connect(
  mapStateToProps,
  actionCreators
)(App)
