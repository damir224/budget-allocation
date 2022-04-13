import { selector } from 'recoil'
import copyObj from '../../helpers/copyObj'
import { channelsState } from '../atoms/channels'
import breakdownTemp from '../../const/breakdownTemp'
import getMonthSum from '../../helpers/getMonthSum'

const updateBudgetFrequency = selector({
  key: 'updateBudgetFrequency',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { newValue, id }) => {
    return set(channelsState, (prev) =>
      prev.reduce((acc, cur) => {
        let copyCh = copyObj(cur)
        if (cur.id === id) {
          copyCh.budgetFrequency = newValue
          copyCh.months = breakdownTemp[copyCh.budgetFrequency].map((el) => ({
            ...el,
            sum: getMonthSum(copyCh.baselineBudget, copyCh.budgetFrequency),
          }))
        }
        acc.push(copyCh)
        return acc
      }, []),
    )
  },
})

export default updateBudgetFrequency
