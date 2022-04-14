import React from 'react'
import Popup from 'reactjs-popup'

import styles from './NameWithPopup.module.scss'
import tooltipInfo from '../../images/tooltipInfo.svg'

const NameWithPopup = ({ name, tooltipContent }) => {
  return (
    <div className={styles.upper}>
      <span className={styles.upperName}>{name}</span>
      <Popup
        trigger={<img src={tooltipInfo} alt="tooltip info" />}
        position="top center"
        on={['hover', 'focus']}
        arrow={'top center'}
      >
        <span className={styles.tooltipContent}>{tooltipContent}</span>
      </Popup>
    </div>
  )
}
export default NameWithPopup
