import { Epic } from 'redux-observable'
import { of, interval } from 'rxjs'
import { filter, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions'

import { getBtcCurrentPrice, subscribeBtcCurrency, unsubscribeBtcCurrency } from './actions'

export const subscribeBtcCurrentPriceEpic: Epic<RootAction, RootAction, RootState, Services> = action$ =>
  action$.pipe(
    filter(isActionOf(subscribeBtcCurrency)),
    switchMap(() =>
      interval(+process.env.REACT_APP_CURRENCT_FETCH_FREQUENCY!).pipe(
        takeUntil(action$.pipe(filter(isActionOf(unsubscribeBtcCurrency)))),
        switchMap(() => of(getBtcCurrentPrice.request())),
      ),
    ),
  )

export const getBtcCurrentPriceEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(getBtcCurrentPrice.request)),
    switchMap(() =>
      api.currency.getCurrentBtcPrice().pipe(
        switchMap(response => of(getBtcCurrentPrice.success(response))),
        catchError(error => of(getBtcCurrentPrice.failure(error))),
      ),
    ),
  )
