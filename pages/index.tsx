import * as React from 'react'

import Head from 'next/head'
import { connect } from 'react-redux'
import { Store } from 'redux'
import styled from 'styled-components'

import EditsChart from '../src/components/EditsChart'
import PageContainer from '../src/components/PageContainer'

import {
  fetchNetChange,
  fetchNetChangeFail,
  fetchNetChangeSuccess,
  periodicallyFetchNetChange,
} from '../src/actions'
import { INetChange, INetChangeState, IState } from '../src/types'
import * as api from '../src/utils/api'
import { dateToUnix } from '../src/utils/time'

interface IAppProps {
  netChange: INetChangeState
  handleFetchNetChange: typeof fetchNetChange
  handlePeriodicallyFetchNetChange: typeof periodicallyFetchNetChange
}

const INTERVAL_SECONDS = 10
const BARS_PER_GRAPH = 10
const LANG_CODES = ['en', 'de']

const ChartWrapper = styled.div`
  display: block;
  height: 400px;
  width: 100%;
`

const ChartsContainer = styled.div`
  display: flex;
  width: 100%;
`

class App extends React.Component<IAppProps> {
  public static async getInitialProps({
    store,
    isServer,
  }: {
    store: Store<IState>
    isServer: boolean
  }) {
    if (isServer) {
      const dateNow = new Date()

      const allReqs: Array<Promise<void>> = []
      await Promise.all(
        LANG_CODES.reduce((accReqs, langCode) => {
          const reqs: Array<Promise<void>> = Array(BARS_PER_GRAPH)
          for (let i = 1; i < BARS_PER_GRAPH + 1; i++) {
            const from = dateToUnix(
              new Date(dateNow.getTime() - i * INTERVAL_SECONDS * 1000)
            )
            const to = dateToUnix(dateNow)
            store.dispatch(fetchNetChange(langCode, from, to))
            const req = api
              .getNetChange(langCode, from, to)
              // tslint:disable-next-line: no-console
              .catch(e => console.log(e))
              .then(result => {
                if (!result) return
                if (!result.data.netChange) {
                  if (result.data.message) {
                    store.dispatch(
                      fetchNetChangeFail(
                        langCode,
                        from,
                        to,
                        result.data.message
                      )
                    )
                  }
                  return
                }
                store.dispatch(
                  fetchNetChangeSuccess(
                    langCode,
                    from,
                    to,
                    result.data.netChange
                  )
                )
              })
            reqs.push(req)
          }
          return accReqs.concat(reqs)
        }, allReqs)
      )
    }
  }

  private intervals: number[] = []

  public fetchNetChangeForCurrentWindow(langCode: string): () => void {
    return () => {
      const dateNow = new Date()
      const from = dateToUnix(
        new Date(dateNow.getTime() - INTERVAL_SECONDS * 1000)
      )
      const to = dateToUnix(dateNow)
      this.props.handleFetchNetChange(langCode, from, to)
    }
  }

  public componentDidMount() {
    this.intervals = LANG_CODES.map(langCode =>
      setInterval(
        this.fetchNetChangeForCurrentWindow(langCode),
        INTERVAL_SECONDS * 1000
      )
    )
  }

  public componentWillUnmount() {
    this.intervals.forEach(handle => {
      clearInterval(handle)
    })
  }

  public getLastXIntervals(x: number, arr: INetChange[]) {
    return arr.slice(Math.max(arr.length - x, 1))
  }

  public render() {
    const { netChange } = this.props

    return (
      <>
        <Head>
          <title>Wiki Edits</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <PageContainer>
          <h1>Wiki Edits</h1>
          <ChartsContainer>
            {LANG_CODES.map(langCode => (
              <ChartWrapper key={langCode}>
                <h2>{langCode}</h2>
                <EditsChart
                  data={this.getLastXIntervals(
                    10,
                    Object.values(netChange[langCode])
                  )}
                />
              </ChartWrapper>
            ))}
          </ChartsContainer>
        </PageContainer>
      </>
    )
  }
}

function mapStateToProps(state: IState) {
  return {
    netChange: state.netChange,
  }
}

const actionCreators = {
  handleFetchNetChange: fetchNetChange,
  handlePeriodicallyFetchNetChange: periodicallyFetchNetChange,
}

export default connect(
  mapStateToProps,
  actionCreators
)(App)
