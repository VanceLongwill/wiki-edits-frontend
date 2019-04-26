import Head from 'next/head'
import Link from 'next/link'

import PageContainer from '../src/components/PageContainer'
import SearchButton from '../src/components/SearchButton'

function App() {
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
      <SearchButton buttonText="some button" />
      <br />
      <Link href="#link-to-nowhere">
        <a>Some link</a>
      </Link>
    </PageContainer>
  )
}

export default App
