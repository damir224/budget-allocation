import React from 'react'

import TableHeaderRow from '../TableHeaderRow'
import TableRow from '../TableRow/TableRow'

const SubTable = ({ budgetFreqTable }) => (
  <div>
    {budgetFreqTable.length > 0 && (
      <>
        <TableHeaderRow tableHead={budgetFreqTable[0].months} />
        {budgetFreqTable.map((el) => (
          <TableRow key={el.id} channel={el} />
        ))}
      </>
    )}
  </div>
)

export default SubTable
