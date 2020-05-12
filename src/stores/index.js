import control from './ControlStore'
import currentHeap from './CurrentHeapStore'
import chart from './ChartStore'
import page from './pageStore'

const stores = {
  ...control,
  ...currentHeap,
  ...chart,
  ...page
}

export default stores