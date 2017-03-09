import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import chartConfig, { unusedChartConfig } from '../chartConfig'

const Charts = () => (
  <div>
    <Doughnut data={chartConfig} />
  </div>
)

export default Charts
