import React, { useContext } from 'react'
import Context from '../context'
import ApexChart from 'react-apexcharts'

const Chart = () => {
  const { store } = useContext(Context)

  const optionsMixedChart = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        endingShape: "arrow"
      }
    },
    stroke: {
      width: [4, 0, 0]
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8
      }
    }
  }

  return (
    <ApexChart 
      type="line" 
      options={optionsMixedChart}
      series={[
        {
          name: "Total Heap",
          type: "line",
          data: store.heapData
        },
      ]}
      width={500}
    >
    </ApexChart>
  )
}

export default Chart