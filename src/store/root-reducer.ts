import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import appReducer from './app/reducer'

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
  })

export default createRootReducer
