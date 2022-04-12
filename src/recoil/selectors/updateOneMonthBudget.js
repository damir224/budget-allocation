import { selector } from 'recoil';
import commaNumber from 'comma-number';

import { channelsState } from '../atoms/channels';
import copyObj from '../../helpers/copyObj';

const updateOneMonthBudget = selector({
  key: 'updateOneMonthBudget',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { id, monthName, monthSum }) => {
    return set(channelsState, (prev) =>
      prev.reduce((acc, cur) => {
        let copyCh = copyObj(cur);
        if (cur.id === id) {
          for (let i = 0; i < copyCh.months.length; i++) {
            if (copyCh.months[i].name === monthName) {
              copyCh.months[i].sum = commaNumber(
                (+monthSum.replace(/,/g, '')).toFixed(2)
              );
              const newSum = copyCh.months.reduce(
                (acc, cur) => +cur.sum.replace(/,/g, '') + acc,
                0
              );
              copyCh.baselineBudget = commaNumber(newSum.toFixed(2));
              break;
            }
          }
        }
        acc.push(copyCh);
        return acc;
      }, [])
    );
  },
});

export default updateOneMonthBudget;
