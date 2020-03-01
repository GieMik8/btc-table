import { createAsyncAction, createAction } from 'typesafe-actions'
import { AjaxResponse, AjaxError } from 'rxjs/ajax'

export const subscribeBtcCurrency = createAction('SUBSCRIBE_BTC_CURRENCY')<void>()
export const unsubscribeBtcCurrency = createAction('UNSUBSCRIBE_BTC_CURRENCY')<void>()

export const getBtcCurrentPrice = createAsyncAction(
  'GET_BTC_CURRENT_PRICE_REQUEST',
  'GET_BTC_CURRENT_PRICE_SUCCESS',
  'GET_BTC_CURRENT_PRICE_FAILURE',
)<undefined, AjaxResponse, AjaxError>()
