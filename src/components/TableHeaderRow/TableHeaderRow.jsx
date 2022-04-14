import React from 'react'
import cn from 'classnames'

import styles from './TableHeaderRow.module.scss'

const TableHeaderRow = ({ tableHead }) => (
  <div className={styles.container}>
    <div className={styles.sumTitle}>Channels</div>
    <div className={styles.names}>
      {tableHead.map((row, index) => {
        return (
          <p key={index} className={cn(styles.sumTitle, styles.name)}>
            {row.name}
          </p>
        )
      })}
    </div>
  </div>
)

export default TableHeaderRow
