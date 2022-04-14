import { selector } from 'recoil'
import commaNumber from 'comma-number'
import { cloneDeep } from 'lodash'

import { channelsState } from '../atoms/channels'
import getMonthSum from '../../helpers/getMonthSum'

const updateBaseLineBudget = selector({
  key: 'updateBaseLineBudget',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { id, newValue }) => {
    return set(channelsState, (previousState) => {
      const previousCopyState = cloneDeep(previousState)
      const currentChannel = previousCopyState.find(
        ({ id: currentId }) => currentId === id,
      )
      currentChannel.baselineBudget = commaNumber(newValue.replace(/,/g, ''))
      currentChannel.months = currentChannel.months.map((channel) => ({
        ...channel,
        sum: getMonthSum(newValue, currentChannel.budgetFrequency),
      }))
      return previousCopyState
    })
  },
})

export default updateBaseLineBudget
