import { combineEpics } from 'redux-observable'

import * as appEpics from './app/epics'

export default combineEpics(...Object.values(appEpics))
