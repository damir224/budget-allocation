import React from 'react'
import { useRecoilValue } from 'recoil'

import { channelsState } from '../../recoil/atoms/channels'
import SubTable from '../SubTable/SubTable'

const Table = () => {
  const channels = useRecoilValue(channelsState)

  const budgetFreqTable1 = channels.filter((el) => el.budgetFrequency === '1')
  const budgetFreqTable4 = channels.filter((el) => el.budgetFrequency === '4')
  const budgetFreqTable12 = channels.filter((el) => el.budgetFrequency === '12')

  return (
    <div>
      <SubTable budgetFreqTable={budgetFreqTable1} />
      <SubTable budgetFreqTable={budgetFreqTable4} />
      <SubTable budgetFreqTable={budgetFreqTable12} />
    </div>
  )
}

export default Table
