import React from 'react';
import { useSetRecoilState } from 'recoil';
import updateOneMonthBudget from '../../recoil/selectors/updateOneMonthBudget';
import styles from './OneMonthBudget.module.scss';

export default React.memo(function OneMonthBudget({
  name,
  sum,
  budgetAllocation,
  id,
}) {
  const setUpdateOneMonthBudget = useSetRecoilState(updateOneMonthBudget);

  return (
    <div className={styles.month}>
      <p className={styles.name}>{name}</p>

      <div className={styles.iconInput}>
        <span className={styles.icon}>$</span>
        <input
          disabled={budgetAllocation}
          type='string'
          className={styles.input}
          value={sum}
          onChange={(e) =>
            setUpdateOneMonthBudget({
              id,
              monthName: name,
              monthSum: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
});
