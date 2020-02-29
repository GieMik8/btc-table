import Base from './base'

const baseUrl: string = process.env.REACT_APP_BASE_URL!

export const base = new Base(baseUrl)
