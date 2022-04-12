import React from 'react';
import { v4 } from 'uuid';

import styles from './Headers.module.scss';
import plus from '../../images/plus.svg';
import { useSetRecoilState } from 'recoil';
import { channelsState } from '../../recoil/atoms/channels';

export default function Headers() {
  const setChannels = useSetRecoilState(channelsState);
  const onClickHandler = () => {
    setChannels((oldChannels) => [
      ...oldChannels,
      {
        id: v4(),
        name: 'Paid reviews',
        img: 'affiliateProgram.svg',
        budgetFrequency: '12',
        baselineBudget: '12,000',
        budgetAllocation: true,
        months: [
          { name: 'Jan 22', sum: '1,000.00' },
          { name: 'Feb 22', sum: '1,000.00' },
          { name: 'Mar 22', sum: '1,000.00' },
          { name: 'Apr 22', sum: '1,000.00' },
          { name: 'May 22', sum: '1,000.00' },
          { name: 'Jun 22', sum: '1,000.00' },
          { name: 'Jul 22', sum: '1,000.00' },
          { name: 'Aug 22', sum: '1,000.00' },
          { name: 'Sep 22', sum: '1,000.00' },
          { name: 'Oct 22', sum: '1,000.00' },
          { name: 'Nov 22', sum: '1,000.00' },
          { name: 'Dec 22', sum: '1,000.00' },
        ],
      },
    ]);
  };

  return (
    <div className={styles.header}>
      <p className={styles.mainTitle}>Build your budget plan</p>
      <p className={styles.title}>Setup channels</p>
      <div className={styles.textBlock}>
        <p className={styles.subTitle}>
          Setup your added channels by adding baseline budgets out of your total
          budget. See the forecast impact with the help of tips and insights.
        </p>
        <button className={styles.button} onClick={() => onClickHandler()}>
          <img src={plus} alt='add channel' />
          <span>Add Channel</span>
        </button>
      </div>
    </div>
  );
}
