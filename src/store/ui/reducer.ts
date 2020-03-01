import { Map, fromJS } from 'immutable'
import { createReducer } from 'typesafe-actions'
import { getBtcCurrentPrice } from 'store/app/actions'

const defaulState = fromJS({
  fetching: false,
})

export const appReducer = createReducer(defaulState as Map<string, any>)
  .handleAction(getBtcCurrentPrice.success, state => state.set('fetching', true))
  .handleAction([getBtcCurrentPrice.request, getBtcCurrentPrice.failure], state => state.set('fetching', false))

export default appReducer
export type AppState = ReturnType<typeof appReducer>
