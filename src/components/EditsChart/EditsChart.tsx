import * as React from 'react'

import { ResponsiveBar } from '@nivo/bar'

import { INetChange } from '../../types'

import { formatDate } from '../../utils/time'

export interface IProps {
  data: INetChange[]
}

export const EditsChart: React.FunctionComponent<IProps> = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['changeInBytes']}
      indexBy="from"
      // tooltipFormat={value => new Date(value * 1000).toUTCString()}
      colors={{ scheme: 'nivo' }}
      margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
      padding={0.2}
      tooltip={({ value, color }) => (
        <strong style={{ color }}>Change (bytes): {value}</strong>
      )}
      axisBottom={{
        format: value => formatDate(new Date(Number(value) * 1000)),
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: 'Time period',
        legendPosition: 'middle',
        legendOffset: 48,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: 'Net change in bytes',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
    />
  )
}
