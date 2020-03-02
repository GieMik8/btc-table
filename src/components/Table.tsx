import React, { useState, useMemo } from 'react'

import { sortByColumnIndex } from 'utils'
import TableHeaderCell from './TableHeaderCell'

type Props = {
  headers: Array<string>
  content: Array<Array<string>>
}

const Table: React.FC<Props> = ({ content, headers }) => {
  const [sortByIndex, setSortByIndex] = useState(0)

  const sorted = useMemo(() => {
    return content.sort(sortByColumnIndex(sortByIndex))
  }, [content, sortByIndex])

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeaderCell
                onSelect={setSortByIndex}
                index={index}
                selected={index === sortByIndex}
                key={`${index}_${header}`}
              >
                {header}
              </TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, index) => (
            <tr key={`${index}_${row}`}>
              {row.map((col, index) => (
                <td key={`${col}_${index}`} dangerouslySetInnerHTML={{ __html: col }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table__footer-info">
        <span>Count: {sorted.length}</span>
      </div>
    </div>
  )
}

export default Table
