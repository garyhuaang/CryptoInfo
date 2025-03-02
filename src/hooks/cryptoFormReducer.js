import { FEATURE_STATE } from "../utils/constants";

export const Actions = {
  SET_KLINE_DATA: "SET_KLINE_DATA",
  // UPDATE_DETAILS_FORM: 'UPDATE_DETAILS_FORM',
};

export const KLINE_DATA_DEFAULT = {
  ticker: "",
  resolution: 1,
  from: 0,
  to: 0,
  timestamp: [],
  high: [],
  low: [],
  open: [],
  close: [],
  volume: [],
  mergedValueArr: [],
};

// export const COMPANY_DETAILS_DEFAULT = {
//   ticker: '',
//   date: '',
// }

export const CRYPTO_DEFAULT = {
  kline: KLINE_DATA_DEFAULT,
};

export const cryptoFormReducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_KLINE_DATA:
      return {
        ...state,
        kline: {
          ...state.kline,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
