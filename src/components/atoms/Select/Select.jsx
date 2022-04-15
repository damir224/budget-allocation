import React from 'react'
import cn from 'classnames'

import styles from './Select.module.scss'
import NameWithPopup from '../NameWithPopup'

const Select = ({ id, budgetFrequency, onUpdateBudgetFrequency }) => {
  return (
    <div className={styles.freq}>
      <NameWithPopup
        name="Budget Frequency"
        tooltipContent="You can set a yearly, quarterly, or monthly budget for this
                channel"
      />
      <select
        className={cn(styles.select, styles.input)}
        value={budgetFrequency}
        onChange={(e) =>
          onUpdateBudgetFrequency({ newValue: e.target.value, id })
        }
      >
        <option value="1">Annually</option>
        <option value="12">Monthly</option>
        <option value="4">Quarterly</option>
      </select>
    </div>
  )
}
export default Select
