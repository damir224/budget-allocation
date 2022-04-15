import React from 'react'
import cn from 'classnames'

import styles from './TabSwitcher.module.scss'
import TABS from '../../../const/tabs'

const TabSwitcher = ({ currentTab, onCurrentTab }) => {
  return (
    <div className={styles.tabs}>
      <p
        className={cn({ [styles.active]: currentTab === 1 })}
        onClick={() => onCurrentTab(TABS.TAB1)}
      >
        Tab 1
      </p>
      <p
        className={cn({ [styles.active]: currentTab === 2 })}
        onClick={() => onCurrentTab(TABS.TAB2)}
      >
        Tab 2
      </p>
    </div>
  )
}

export default TabSwitcher
