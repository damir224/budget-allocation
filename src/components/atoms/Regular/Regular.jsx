import React from 'react'

import styles from './Regular.module.scss'
import freqNameEnum from '../../../const/freqNameEnum'
import NameWithPopup from '../NameWithPopup/NameWithPopup'

const Regular = ({
  id,
  budgetFrequency,
  baselineBudget,
  isBudgetAllocation,
  onUpdateBaseLineBudget,
}) => {
  return (
    <div>
      <NameWithPopup
        name={`Baseline ${freqNameEnum[budgetFrequency]} Budget`}
        tooltipContent="Set an annual budget for this chanel - you'll be able to break
        it down to months in the following step."
      />
      <input
        disabled={!isBudgetAllocation}
        type="text"
        className={styles.input}
        value={baselineBudget}
        onChange={(e) =>
          onUpdateBaseLineBudget({ id, newValue: e.target.value })
        }
      />
    </div>
  )
}
export default Regular
