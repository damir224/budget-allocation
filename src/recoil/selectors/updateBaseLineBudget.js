import { selector } from 'recoil'
import commaNumber from 'comma-number'

import { channelsState } from '../atoms/channels'
import copyObj from '../../helpers/copyObj'
import getMonthSum from '../../helpers/getMonthSum'

const updateBaseLineBudget = selector({
  key: 'updateBaseLineBudget',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { id, newValue }) => {
    return set(channelsState, (prev) =>
      prev.reduce((acc, cur) => {
        let copyCh = copyObj(cur)
        if (cur.id === id) {
          copyCh.baselineBudget = commaNumber(newValue.replace(/,/g, ''))
          copyCh.months = copyCh.months.map((el) => ({
            ...el,
            sum: getMonthSum(newValue, copyCh.budgetFrequency),
          }))
        }
        acc.push(copyCh)
        return acc
      }, []),
    )
  },
})

export default updateBaseLineBudget
