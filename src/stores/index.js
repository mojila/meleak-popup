import control from './ControlStore'
import currentHeap from './CurrentHeapStore'
import chart from './ChartStore'

const stores = {
  ...control,
  ...currentHeap,
  ...chart
}

export default stores