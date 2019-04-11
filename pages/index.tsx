import Head from 'next/head'
import Link from 'next/link'

import Button from '../components/Button'
import PageContainer from '../components/PageContainer'

function App () {
  return (
    <PageContainer>
      <Head>
        <title>My page title</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
      </Head>
      <div>Welcome to Next.js!</div>
      <Button buttonText='some button' />
      <br />
      <Link href='#link-to-nowhere'><a>Some link</a></Link>
    </PageContainer>
  )
}

export default App
