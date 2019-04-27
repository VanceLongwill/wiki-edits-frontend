import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: #fefefe;
  margin: 0 auto;
`

interface IPageContainerProps {
  children?: React.ReactNode
}

export function PageContainer(props: IPageContainerProps) {
  return <Wrapper>{props.children}</Wrapper>
}
