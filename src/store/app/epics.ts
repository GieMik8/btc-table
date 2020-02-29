import { Epic } from 'redux-observable'
import { of, empty } from 'rxjs'
import { filter, switchMap, catchError } from 'rxjs/operators'
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions'

import { getApiVersionAsync, sayHello } from './actions'

export const sayHelloEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(sayHello)),
    switchMap(() => empty()),
  )

export const getApiVersionEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(getApiVersionAsync.request)),
    switchMap(() =>
      api.base.getApiVersion().pipe(
        switchMap(re => of(getApiVersionAsync.success(re.response))),
        catchError(e => of(getApiVersionAsync.failure(e.message))),
      ),
    ),
  )
