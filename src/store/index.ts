import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createBrowserHistory } from 'history'
import { RootAction, RootState, Services } from 'typesafe-actions'

import { composeEnhancers } from './utils'
import createRootReducer from './root-reducer'
import rootEpic from './root-epic'
import services from '../services'

export const history = createBrowserHistory()

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
  dependencies: services,
})

// configure middlewares
const middlewares = [epicMiddleware]
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

// rehydrate state on app start
const initialState = {}

// create store
const store = createStore(createRootReducer(history), initialState, enhancer)

epicMiddleware.run(rootEpic)

// export store singleton instance
export default store
