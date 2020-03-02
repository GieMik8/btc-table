import { Map, fromJS } from 'immutable'
import { createReducer } from 'typesafe-actions'
import { getBtcCurrentPrice } from './actions'

const defaultState = fromJS({
  ready: null,
  info: {
    time: null,
    disclaimer: null,
    chartName: null,
  },
  bpi: {},
})

export const appReducer = createReducer(defaultState as Map<string, any>).handleAction(
  getBtcCurrentPrice.success,
  (state, { payload }) =>
    state
      .set('ready', true)
      .set('bpi', fromJS(payload.response.bpi))
      .setIn(['info', 'time'], payload.response.time)
      .setIn(['info', 'disclaimer'], payload.response.disclaimer)
      .setIn(['info', 'chartName'], payload.response.chartName),
)

export default appReducer

export type AppState = ReturnType<typeof appReducer>
