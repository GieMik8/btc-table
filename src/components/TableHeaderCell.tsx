import React, { useCallback } from 'react'
import clsx from 'clsx'

type Props = {
  selected?: boolean
  index: number
  onSelect?: (index: number) => void
  children: any
}

const TableHeaderCell: React.FC<Props> = ({ children, selected = false, index, onSelect = (): void => {} }) => {
  const select = useCallback(() => onSelect(index), []) // eslint-disable-line
  return (
    <th onClick={select} className={clsx({ selected })}>
      {children} <span className={clsx({ invisible: !selected })} dangerouslySetInnerHTML={{ __html: '&darr;' }} />
    </th>
  )
}

export default React.memo(TableHeaderCell)
