import React, { useEffect } from 'react'

import Table from './Table'
import { useDispatch } from 'react-redux'
import { subscribeBtcCurrency, unsubscribeBtcCurrency } from 'store/app/actions'

const CurrencyTable: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(subscribeBtcCurrency())
    return (): void => {
      dispatch(unsubscribeBtcCurrency())
    }
  }, [dispatch])

  return <Table />
}

export default CurrencyTable
