import React from 'react';
import cn from 'classnames';

import styles from './TabSwitcher.module.scss';
export default function TabSwitcher({ currentTab, setCurrentTab }) {
  return (
    <div className={styles.tabs}>
      <p
        className={cn({ [styles.active]: currentTab === 1 })}
        onClick={() => setCurrentTab(1)}
      >
        Tab 1
      </p>
      <p
        className={cn({ [styles.active]: currentTab === 2 })}
        onClick={() => setCurrentTab(2)}
      >
        Tab 2
      </p>
    </div>
  );
}
