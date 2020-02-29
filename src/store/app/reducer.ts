import { Map } from 'immutable'
import { createReducer } from 'typesafe-actions'

import { getApiVersionAsync } from './actions'

export const appReducer = createReducer(Map({ version: 'unknown' }) as Map<string, any>)
  .handleAction(getApiVersionAsync.success, (state, action) => state.set('version', action.payload))
  .handleAction([getApiVersionAsync.request, getApiVersionAsync.failure], state => state.set('version', 'unknown'))

export default appReducer
export type AppState = ReturnType<typeof appReducer>
