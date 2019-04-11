import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './'

storiesOf('Button', module).add('with text', () => {
  return <Button buttonText="Hello World" />
})
