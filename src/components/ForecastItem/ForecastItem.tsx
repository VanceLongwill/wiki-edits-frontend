import * as React from 'react'
import styled from 'styled-components'

import { IForecast } from '../../types'

interface IForecastItemProps {
  data: IForecast
}

export const ForecastItemText = styled.td`
  text-align: center;
`

export function formatTemperature(temp: number) {
  const roundedTemp = Math.floor(temp)
  return `${roundedTemp}°C`
}

export function ForecastItem(props: IForecastItemProps) {
  const { data } = props
  return (
    <>
      <ForecastItemText>{data.displayName}</ForecastItemText>
      {data.list.map((item, i) => {
        return (
          <ForecastItemText key={`${data.displayName}-${i}-${item.main.grnd_level}`}>
            {formatTemperature(item.main.temp)}
          </ForecastItemText>
        )
      })}
    </>
  )
}
