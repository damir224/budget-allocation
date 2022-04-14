import { selector } from 'recoil'
import { cloneDeep } from 'lodash'

import { channelsState } from '../atoms/channels'
import breakdownTemplate from '../../const/breakdownTemplate'
import getMonthSum from '../../helpers/getMonthSum'

const updateBudgetFrequency = selector({
  key: 'updateBudgetFrequency',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { newValue, id }) => {
    return set(channelsState, (previousState) => {
      const previousCopyState = cloneDeep(previousState)
      const currentChannel = previousCopyState.find(
        ({ id: currentId }) => currentId === id,
      )
      currentChannel.budgetFrequency = newValue
      currentChannel.months = breakdownTemplate[
        currentChannel.budgetFrequency
      ].map((channel) => ({
        ...channel,
        sum: getMonthSum(
          currentChannel.baselineBudget,
          currentChannel.budgetFrequency,
        ),
      }))
      return previousCopyState
    })
  },
})

export default updateBudgetFrequency
