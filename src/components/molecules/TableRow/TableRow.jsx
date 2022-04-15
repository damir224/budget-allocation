import React from 'react'

import styles from './TableRow.module.scss'
import ChannelIconName from '../../atoms/ChannelIconName'
import TableSum from '../../atoms/TableSum'

const TableRow = ({ channel }) => {
  return (
    <div className={styles.container}>
      <ChannelIconName img={channel.img} name={channel.name} />
      <div className={styles.months}>
        {(channel ?? []).months.map(({ sum, name }) => (
          <TableSum key={name} sum={sum} id={channel.id} name={name} />
        ))}
      </div>
    </div>
  )
}
export default TableRow
