import React, { useEffect } from 'react'
import { Map } from 'immutable'
import { useDispatch, useSelector } from 'react-redux'

import { subscribeBtcCurrency, unsubscribeBtcCurrency } from 'store/app/actions'
import { CurrencyTableStatus, Table } from 'components'

const mapContentFromCurrencies = (currency: Map<string, any>, index: number): Array<any> => [
  index,
  currency.get('code'),
  currency.get('description'),
  currency.get('rate_float'),
  currency.get('symbol'),
]

const CurrencyTable: React.FC = () => {
  const dispatch = useDispatch()
  const ready: boolean = useSelector((state: any) => state.app.get('ready'))
  const currencies: Map<string, Map<string, any>> = useSelector((state: any) => state.app.get('bpi'))

  const content = currencies
    .valueSeq()
    .toArray()
    .map(mapContentFromCurrencies)

  useEffect(() => {
    dispatch(subscribeBtcCurrency())
    return (): void => {
      dispatch(unsubscribeBtcCurrency())
    }
  }, [dispatch])

  return (
    <>
      <CurrencyTableStatus />
      {ready && <Table content={content} headers={['#', 'Code', 'Description', 'Rate', 'Currency']} />}
    </>
  )
}

export default CurrencyTable
