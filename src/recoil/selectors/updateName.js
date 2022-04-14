import { selector } from 'recoil'
import { cloneDeep } from 'lodash'

import { channelsState } from '../atoms/channels'

const updateName = selector({
  key: 'updateName',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { newName, id }) => {
    return set(channelsState, (previousState) => {
      const previousCopyState = cloneDeep(previousState)
      const currentChannel = previousCopyState.find(
        ({ id: currentId }) => currentId === id,
      )
      currentChannel.name = newName
      return previousCopyState
    })
  },
})

export default updateName
