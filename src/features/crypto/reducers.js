import Actions from './actions'
import { CRYPTO_DEFAULT } from './defaultStates'

export const cryptoFormReducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_KLINE_DATA:
      return {
        ...state,
        kline: {
          ...state.kline,
          ...action.payload,
        },
      }
    default:
      return CRYPTO_DEFAULT
  }
}
