import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 50px auto;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 24px;
  width: 900px;
  background: #fefefe;
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }
`

interface IPageContainerProps {
  children?: React.ReactNode
}

export function PageContainer(props: IPageContainerProps) {
  return <Wrapper>{props.children}</Wrapper>
}
