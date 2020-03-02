import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

import Loader from './Loader'
import clsx from 'clsx'

const CurrencyTableStatus: React.FC = () => {
  const fetching = useSelector((state: any) => state.ui.get('fetching'))
  const info = useSelector((state: any) => state.app.getIn(['info']))
  const error = useSelector((state: any) => state.ui.get('error'))

  const updated = info.getIn(['time', 'updatedISO'])

  const currencyUpdated = useMemo(() => {
    if (!updated) return null
    const updatedMoment = moment(updated)
    return `Currency updated: ${updatedMoment.format('HH:mm')} (${updatedMoment.fromNow()})`
  }, [updated])

  return (
    <div className="table__status">
      <h3 className="table__status-description">{info.get('disclaimer')}</h3>
      <div className="table__status-info">
        <span>{currencyUpdated}</span>
        <span className={clsx({ invisible: !fetching })}>Fetching {<Loader />}</span>
      </div>
      {error && (
        <div className="table__status-error">
          <span>{`Error while fetching: "${error}". Check you network connection.`}</span>
        </div>
      )}
    </div>
  )
}

export default React.memo(CurrencyTableStatus)
