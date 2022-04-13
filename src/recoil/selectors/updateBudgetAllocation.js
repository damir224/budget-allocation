import { selector } from 'recoil'
import copyObj from '../../helpers/copyObj'
import { channelsState } from '../atoms/channels'

const updateBudgetAllocation = selector({
  key: 'updateBudgetAllocation',
  get: ({ get }) => get(channelsState),
  set: ({ set }, id) => {
    return set(channelsState, (prev) =>
      prev.reduce((acc, cur) => {
        let copyCh = copyObj(cur)
        if (cur.id === id) {
          copyCh.budgetAllocation = !copyCh.budgetAllocation
        }
        acc.push(copyCh)
        return acc
      }, []),
    )
  },
})

export default updateBudgetAllocation
