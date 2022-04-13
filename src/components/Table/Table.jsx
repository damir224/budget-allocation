import React, { useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import { channelsState } from '../../recoil/atoms/channels'
import TableHeaderRow from '../TableHeaderRow'
import TableRow from '../TableRow/TableRow'

export default function Table() {
  const channels = useRecoilValue(channelsState)

  const bf1 = useMemo(
    () => channels.filter((el) => el.budgetFrequency === '1'),
    [channels],
  )
  const bf4 = useMemo(
    () => channels.filter((el) => el.budgetFrequency === '4'),
    [channels],
  )
  const bf12 = useMemo(
    () => channels.filter((el) => el.budgetFrequency === '12'),
    [channels],
  )

  return (
    <div>
      {bf1.length > 0 && (
        <>
          <TableHeaderRow tableHead={bf1[0].months} />
          {bf1.map((el) => (
            <TableRow key={el.id} channel={el} />
          ))}
        </>
      )}
      {bf4.length > 0 && (
        <>
          <TableHeaderRow tableHead={bf4[0].months} />
          {bf4.map((el) => (
            <TableRow key={el.id} channel={el} />
          ))}
        </>
      )}
      {bf12.length > 0 && (
        <>
          <TableHeaderRow tableHead={bf12[0].months} />
          {bf12.map((el) => (
            <TableRow key={el.id} channel={el} />
          ))}
        </>
      )}
    </div>
  )
}
