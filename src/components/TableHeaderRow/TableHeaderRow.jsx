import React from 'react'
import styles from './TableHeaderRow.module.scss'
import cn from 'classnames'

export default function TableHeaderRow({ tableHead }) {
  return (
    <div className={styles.container}>
      <div className={styles.sumTitle}>Channels</div>
      <div className={styles.names}>
        {tableHead.map((el, i) => {
          return (
            <p key={i} className={cn(styles.sumTitle, styles.name)}>
              {el.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}
