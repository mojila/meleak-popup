import React, { useContext } from 'react'
import {XYPlot, AreaSeries, LineSeries, HorizontalGridLines, XAxis, YAxis} from 'react-vis'
import Context from '../context'

const Chart = () => {
  const { store } = useContext(Context)

  return (
    <XYPlot
      height={200}
      width={400}
    >
      <HorizontalGridLines />
      <AreaSeries
        data={store.heapData}
        opacity={0.25}
        stroke="transparent"
        style={{}}
      />
      <LineSeries
        curve={null}
        data={store.heapData}
        opacity={1}
        stroke="#12939a"
        strokeStyle="solid"
        style={{}}
      />
      <XAxis />
      <YAxis />
    </XYPlot>
  )
}

export default Chart