import { FEATURE_STATE } from '../utils/constants'

// https://api.polygon.io/v2/reference/news?
//      ticker={stockticker}
//      &published_utc={gt || gte || lt || lte}
//      &order={order}
//      &limit={limit}
//      &sort=published_utc
//      &apiKey=wimqb02_2TdEz7whNdD7Liiofdj9Jv4t

// published_utc = {gt} greater than
// published_utc = {gte} greater than or equal to
// published_utc = {lt} less than
// published_utc = {lte} less than or equal to

// order={asc || desc}

// limit = Limit the number of results returned, default is 10 and max is 1000.

export const Actions = {
  UPDATE_NEWS_FORM: 'UPDATE_NEWS_FORM',
  UPDATE_DETAILS_FORM: 'UPDATE_DETAILS_FORM',
}

export const COMPANY_NEWS_DEFAULT = {
  ticker: '',
  publishedTimeFrame: '',
  order: '',
  limit: '',
}

export const COMPANY_DETAILS_DEFAULT = {
  ticker: '',
  date: '',
}

export const COMPANY_DEFAULT = {
  news: COMPANY_NEWS_DEFAULT,
  details: COMPANY_DETAILS_DEFAULT,
}

export const stockFormReducer = (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_NEWS_FORM: {
      return { ...state, news: { ...state.news, ...action.payload } }
    }
    case Actions.UPDATE_DETAILS_FORM: {
      return { ...state, details: { ...state.details, ...action.payload } }
    }
    default:
      return state
  }
}
