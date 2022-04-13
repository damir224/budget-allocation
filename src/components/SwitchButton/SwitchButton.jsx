import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import styles from './SwitchButton.module.scss'
import updateBudgetAllocation from '../../recoil/selectors/updateBudgetAllocation'
export default React.memo(function SwitchButton({ id, budgetAllocation }) {
  const [bdgAlloc, setBdgAlloc] = useState(budgetAllocation)
  const setupdateBudgetAllocation = useSetRecoilState(updateBudgetAllocation)

  const onClickHandler = () => {
    setupdateBudgetAllocation(id)
  }

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          checked={!bdgAlloc}
          onChange={() => setBdgAlloc(!bdgAlloc)}
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
})
