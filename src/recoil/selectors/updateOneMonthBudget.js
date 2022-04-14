import { selector } from 'recoil'
import commaNumber from 'comma-number'
import { cloneDeep } from 'lodash'

import { channelsState } from '../atoms/channels'

const updateOneMonthBudget = selector({
  key: 'updateOneMonthBudget',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { id, monthName, monthSum }) => {
    return set(channelsState, (previousState) => {
      const previousCopyState = cloneDeep(previousState)
      const currentChannel = previousCopyState.find(
        ({ id: currentId }) => currentId === id,
      )

      const currentMonth = currentChannel.months.find(
        ({ name: currentName }) => currentName === monthName,
      )
      currentMonth.sum = commaNumber((+monthSum.replace(/,/g, '')).toFixed(2))

      const newSum = currentChannel.months.reduce(
        (accumulator, currentMonth) =>
          +currentMonth.sum.replace(/,/g, '') + accumulator,
        0,
      )
      currentChannel.baselineBudget = commaNumber(newSum.toFixed(2))
      return previousCopyState
    })
  },
})

export default updateOneMonthBudget
