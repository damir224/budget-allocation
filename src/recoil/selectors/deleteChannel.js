import { selector } from 'recoil'
import { cloneDeep } from 'lodash'

import { channelsState } from '../atoms/channels'

const deleteChannel = selector({
  key: 'deleteChannel',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { id }) => {
    return set(channelsState, (previousState) => {
      const previousCopyState = cloneDeep(previousState)
      const currentChannelIndex = previousCopyState.findIndex(
        ({ id: currentId }) => currentId === id,
      )
      previousCopyState.splice(currentChannelIndex, 1)
      return previousCopyState
    })
  },
})

export default deleteChannel
