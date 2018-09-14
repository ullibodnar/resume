import { ENTHUSIASM_ENTERED, initialState } from '..'

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case ENTHUSIASM_ENTERED:
      return {
        ...state,
        enthusiasm: payload
      }
    default:
      return state
  }
}

export { rootReducer }
