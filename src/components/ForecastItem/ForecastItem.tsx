import * as React from 'react'

import { IForecast } from '../../types'

interface IForecastItemProps {
  data: IForecast
}

export function formatTemperature(temp: number) {
  const roundedTemp = Math.round(temp)
  return `${roundedTemp}°C`
}

export function ForecastItem(props: IForecastItemProps) {
  const { data } = props
  return (
    <>
      <td>{data.displayName}</td>
      {data.list.map((item, i) => {
        return (
          <td key={`${data.displayName}-${i}-${item.main.grnd_level}`}>
            {formatTemperature(item.main.temp)}
          </td>
        )
      })}
    </>
  )
}
