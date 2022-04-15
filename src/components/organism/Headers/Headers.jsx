import React from 'react'
import { useSetRecoilState } from 'recoil'
import { cloneDeep } from 'lodash'
import { v4 } from 'uuid'

import styles from './Headers.module.scss'
import plus from '../../../images/plus.svg'
import { channelsState } from '../../../recoil/atoms/channels'
import newChannelTemplate from '../../../const/newChannelTemplate'

const Headers = () => {
  const setChannels = useSetRecoilState(channelsState)
  const onClickHandler = () =>
    setChannels((oldChannels) => [
      ...oldChannels,
      { ...cloneDeep(newChannelTemplate), id: v4() },
    ])

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
          <img src={plus} alt="add channel" />
          <span>Add Channel</span>
        </button>
      </div>
    </div>
  )
}
export default Headers
