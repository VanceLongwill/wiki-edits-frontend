import { Button } from 'antd'
import * as React from 'react'

interface ISearchButtonProps {
  buttonText: string
}

export function SearchButton(props: ISearchButtonProps) {
  return <Button type="primary">{props.buttonText}</Button>
}
