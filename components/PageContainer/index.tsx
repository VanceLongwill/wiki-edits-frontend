import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: pink;
`

interface Props {
  children?: React.ReactNode
}

function PageContainer(props: Props) {
  return <Wrapper>{props.children}</Wrapper>
}

export default PageContainer
