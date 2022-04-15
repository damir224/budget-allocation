import React from 'react'

import styles from './BudgetBreakdown.module.scss'
import OneMonthBudget from '../../atoms/OneMonthBudget'

const BudgetBreakdown = ({ months, budgetAllocation, id }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Budget Breakdown</p>
      <p className={styles.subTitle}>
        By default, your budget will be equally divided throughout the year. You
        can manually change the budget allocation, either now or later.
      </p>
      <div className={styles.months}>
        {months.map(({ name, sum }) => (
          <OneMonthBudget
            key={name}
            name={name}
            sum={sum}
            budgetAllocation={budgetAllocation}
            id={id}
          />
        ))}
      </div>
    </div>
  )
}

export default BudgetBreakdown
