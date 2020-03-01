import Base from './base'
import Currency from './currency'

const baseUrl: string = process.env.REACT_APP_BASE_URL!
const currencyUrl: string = process.env.REACT_APP_CURRENCY_BASE_URL!

export const base = new Base(baseUrl)
export const currency = new Currency(currencyUrl)
