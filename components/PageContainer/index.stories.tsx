import * as React from 'react'
import { storiesOf } from '@storybook/react'
import PageContainer from './'

storiesOf('PageContainer', module).add('with no children', () => {
  return <PageContainer />
})
