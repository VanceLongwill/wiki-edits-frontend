import * as React from 'react'
import styled from 'styled-components'

interface IForecastListProps {
}

const ForecastListContainer = styled.div`
  padding: 10px;
`

export function ForecastList(props: IForecastListProps) {
  return (
    <ForecastListContainer>
      {props}
    </ForecastListContainer>
  )
}
