import React from 'react'
import { VictoryChart, VictoryBar, VictoryLine } from 'victory'

const style = {
  parent: { border: '1px solid #ccc', margin: '2%', maxWidth: '40%' }
}
const D3 = () => (
  <div>
    <VictoryChart
      style={style}
      domainPadding={{ x: 30, y: 30 }}
      height={600}
      width={600}
    >
      <VictoryBar
        name="bar"
        style={{ data: { width: 15, fill: 'green' } }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 }
        ]}
      />
      <VictoryLine
        name="line"
        y={() => 0.5}
        style={{ data: { stroke: 'blue', strokeWidth: 5 } }}
        label="LINE"
      />
    </VictoryChart>
  </div>
)

export default D3
