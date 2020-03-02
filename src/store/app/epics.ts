import { Epic } from 'redux-observable'
import { of, interval } from 'rxjs'
import { filter, switchMap, catchError, takeUntil, startWith } from 'rxjs/operators'
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions'

import * as Actions from './actions'

export const subscribeBtcCurrentPriceEpic: Epic<RootAction, RootAction, RootState, Services> = action$ =>
  action$.pipe(
    filter(isActionOf(Actions.subscribeBtcCurrency)),
    switchMap(() =>
      interval(+process.env.REACT_APP_CURRENCT_FETCH_FREQUENCY!).pipe(
        startWith(Actions.getBtcCurrentPrice.request()),
        takeUntil(action$.pipe(filter(isActionOf(Actions.unsubscribeBtcCurrency)))),
        switchMap(() => of(Actions.getBtcCurrentPrice.request())),
      ),
    ),
  )

export const getBtcCurrentPriceEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(Actions.getBtcCurrentPrice.request)),
    switchMap(() =>
      api.currency.getCurrentBtcPrice().pipe(
        switchMap(response => of(Actions.getBtcCurrentPrice.success(response))),
        catchError(error => of(Actions.getBtcCurrentPrice.failure(error))),
      ),
    ),
  )
