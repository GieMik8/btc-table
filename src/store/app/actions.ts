import { createAction, createAsyncAction } from 'typesafe-actions'

export const sayHello = createAction('SAY_HELLO')<string>()

export const getApiVersionAsync = createAsyncAction(
  'GET_API_VERSION_REQUEST',
  'GET_API_VERSION_SUCCESS',
  'GET_API_VERSION_FAILURE',
)<undefined, string, string>()
