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
    default:
      return state
  }
}

export default Reducer