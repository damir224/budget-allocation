import { selector } from 'recoil'
import copyObj from '../../helpers/copyObj'
import { channelsState } from '../atoms/channels'

const deleteChannel = selector({
  key: 'deleteChannel',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { id }) => {
    return set(channelsState, (prev) =>
      prev.reduce((acc, cur) => {
        if (cur.id !== id) {
          let copyCh = copyObj(cur)
          acc.push(copyCh)
        }
        return acc
      }, []),
    )
  },
})

export default deleteChannel
