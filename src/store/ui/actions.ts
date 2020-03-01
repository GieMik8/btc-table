import { createAction } from 'typesafe-actions'

export const sayHello = createAction('SAY_HELLO')<string>()
