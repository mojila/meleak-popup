import stores from "../stores";
import actions from "../actions";

const Reducer = (state = stores, action) => {
  switch (action.type) {
    case actions.START:
      return {
        ...state,
        active: true
      }
    case actions.STOP:
      return {
        ...state,
        active: false
      }
    case actions.UPDATE_HEAP:
      return {
        ...state,
        usedHeap: action.payload.usedHeap,
        totalHeap: action.payload.totalHeap
      }
    default:
      return state
  }
}

export default Reducer