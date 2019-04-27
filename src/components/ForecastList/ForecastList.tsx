import * as React from 'react'
import styled from 'styled-components'

import ForecastItem from '../ForecastItem'

import { IForecast } from '../../types'

interface IForecastListProps {
  locations: IForecast[]
}

const ForecastListContainer = styled.table`
  * {
    box-sizing: border-box;
  }
  padding: 10px;
  font-size: 24px;
  width: 950px;
  tr:nth-child(2n) {
    background: rgba(0, 0, 0, 0.05);
  }
`

const ForecastRow = styled.tr`
  display: flex;
  flex-wrap: row-wrap;
  flex-grow: 0;
  width: 100%;
  padding: 0px;
  margin: 0px;
  th {
    font-weight: 700;
  }
  td,
  th {
    overflow: hidden;
    padding: 20px;
    width: 40px;
    list-style: none;
    flex-grow: 1;
    white-space: nowrap;
  }
  th:first-child,
  td:first-child {
    width: 100px;
    text-align: left;
  }
`

export function convertUnixTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000)
  const hour = date.getHours()
  const formattedHour = hour < 10 ? `0${hour}` : hour
  return `${formattedHour}:00 `
}

export function ForecastList(props: IForecastListProps) {
  const { locations } = props
  const headings =
    locations.length > 0 &&
    locations[0].list.map(item => {
      return (
        <th
          key={`${item.main.sea_level}-${item.dt}-${item.wind.speed}-${
            item.main.pressure
          }`}>
          {convertUnixTimestamp(item.dt)}
        </th>
      )
    })
  return (
    <ForecastListContainer>
      <tbody>
        <ForecastRow>
          <th>City</th>
          {headings}
        </ForecastRow>
        {locations.map((location, i) => (
          <ForecastRow key={`${location.displayName}-${i}`}>
            <ForecastItem data={location} />
          </ForecastRow>
        ))}
      </tbody>
    </ForecastListContainer>
  )
}
