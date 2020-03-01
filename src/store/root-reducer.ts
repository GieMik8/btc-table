import { combineReducers } from 'redux'

import app from './app/reducer'
import ui from './ui/reducer'

const createRootReducer = () =>
  combineReducers({
    app,
    ui,
  })

export default createRootReducer
