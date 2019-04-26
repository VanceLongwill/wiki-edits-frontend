import { storiesOf } from '@storybook/react'
import * as React from 'react'
import PageContainer from './'

storiesOf('PageContainer', module).add('with no children', () => {
  return <PageContainer />
})
