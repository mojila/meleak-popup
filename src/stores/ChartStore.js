const chart = {
  heapData: [],
  max: 2000
}

if (process.env.NODE_ENV !== 'production') {
  chart.heapData = [{
    x: 1,
    y: 200
  },{
    x: 2,
    y: 210
  }]
} else {
  chart.max = performance.memory.jsHeapSizeLimit / 1000000
}

export default chart