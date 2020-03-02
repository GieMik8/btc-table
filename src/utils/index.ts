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

export const sortByColumnIndex = (index: number) => (a: Array<string>, b: Array<string>): number => {
  if (a[index] < b[index]) {
    return -1
  }
  if (a[index] > b[index]) {
    return 1
  }
  return 0
}
