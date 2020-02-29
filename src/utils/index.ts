export type ActionSet = {
  PENDING: string
  SUCCESS: string
  ERROR: string
  actionName: string
}

export const createActionSet = (actionName: string): ActionSet => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  ERROR: `${actionName}_ERROR`,
  actionName,
})
