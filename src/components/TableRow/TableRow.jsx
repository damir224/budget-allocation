import React from 'react';
import styles from './TableRow.module.scss';
import ChannelIconName from '../ChannelIconName';
import TableSum from '../TableSum';

export default function TableRow({ channel }) {
  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <ChannelIconName img={channel.img} name={channel.name} />
      </div>
      <div className={styles.gradient} />
      <div className={styles.months}>
        {channel.months.map(({ sum, name }) => (
          <TableSum sum={sum} id={channel.id} name={name} />
        ))}
      </div>
    </div>
  );
}
