import * as React from 'react'
import styled from 'styled-components'

interface IForecastItemProps {
  city: string;
}

export const ForecastItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`

export const ForecastItemText = styled.li`
  font-size: 14px;
  text-align: center;
`

export function ForecastItem(props: IForecastItemProps) {
  return (
    <ForecastItemContainer>
      <ForecastItemText>
        {props}
        London, UK
      </ForecastItemText>
      <ForecastItemText>
        12C
      </ForecastItemText>
        16C
      <ForecastItemText>
        17C
      </ForecastItemText>
      <ForecastItemText>
        14C
      </ForecastItemText>
    </ForecastItemContainer>
  )
}
