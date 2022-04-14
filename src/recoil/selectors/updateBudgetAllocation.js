import { selector } from 'recoil'
import { cloneDeep } from 'lodash'

import { channelsState } from '../atoms/channels'

const updateBudgetAllocation = selector({
  key: 'updateBudgetAllocation',
  get: ({ get }) => get(channelsState),
  set: ({ set }, id) => {
    return set(channelsState, (previousState) => {
      const previousCopyState = cloneDeep(previousState)
      const currentChannel = previousCopyState.find(
        ({ id: currentId }) => currentId === id,
      )
      currentChannel.budgetAllocation = !currentChannel.budgetAllocation
      return previousCopyState
    })
  },
})

export default updateBudgetAllocation
