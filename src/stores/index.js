import controlStore from './ControlStore'
import currentHeap from './CurrentHeapStore'

const stores = {
  ...controlStore,
  ...currentHeap
}

export default stores