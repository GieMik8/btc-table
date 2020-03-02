import { Map, fromJS } from 'immutable'
import { createReducer } from 'typesafe-actions'
import { getBtcCurrentPrice } from 'store/app/actions'

const defaulState = fromJS({
  fetching: false,
  error: null,
})

export const appReducer = createReducer(defaulState as Map<string, any>)
  .handleAction(getBtcCurrentPrice.request, state => state.set('fetching', true))
  .handleAction([getBtcCurrentPrice.success], state => state.set('fetching', false).set('error', null))
  .handleAction(getBtcCurrentPrice.failure, (state, { payload }) =>
    state.set('fetching', false).set('error', payload.message),
  )

export default appReducer
export type AppState = ReturnType<typeof appReducer>
