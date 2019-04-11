import * as React from 'react'
import { Button } from 'antd'

interface Props {
  buttonText: string
}

export default (props: Props) => (
  <Button type="primary">{props.buttonText}</Button>
)
