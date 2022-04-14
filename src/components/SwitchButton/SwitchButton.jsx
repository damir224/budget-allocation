import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import styles from './SwitchButton.module.scss'
import updateBudgetAllocation from '../../recoil/selectors/updateBudgetAllocation'

const SwitchButton = ({ id, budgetAllocation }) => {
  const [budgetAllocationState, setBudgetAllocationState] =
    useState(budgetAllocation)
  const setUpdateBudgetAllocation = useSetRecoilState(updateBudgetAllocation)

  const onClickHandler = () => {
    setUpdateBudgetAllocation(id)
  }

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          checked={!budgetAllocationState}
          onChange={() =>
            setBudgetAllocationState(
              (previousBudgetAllocationState) => !previousBudgetAllocationState,
            )
          }
          className={styles.switchCheckbox}
          type="checkbox"
        />
        <div className={styles.switchButton} />
        <div className={styles.switchLabels} onClick={onClickHandler}>
          <span>Equal</span>
          <span>Manual</span>
        </div>
      </label>
    </div>
  )
}

export default React.memo(SwitchButton)
