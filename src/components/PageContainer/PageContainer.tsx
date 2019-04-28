import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 24px;
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

export const PageContainer: React.FunctionComponent = props => {
  return <Wrapper>{props.children}</Wrapper>
}
