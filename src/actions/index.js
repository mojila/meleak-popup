import controlActions from './ControlActions'
import currentHeapActions from './CurrentHeapAction'
import pageActions from './PageActions'

const actions = {
  ...controlActions,
  ...currentHeapActions,
  ...pageActions
}

export default actions