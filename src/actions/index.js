import controlActions from './ControlActions'
import currentHeapActions from './CurrentHeapAction'

const actions = {
  ...controlActions,
  ...currentHeapActions
}

export default actions