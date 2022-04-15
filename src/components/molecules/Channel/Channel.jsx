import React from 'react'
import styles from './Channel.module.scss'
import PanelTop from '../../atoms/PanelTop'
import PanelContent from '../PanelContent'

const Channel = ({ id, name, img, onOpenId, isOpen }) => (
  <div className={styles.container}>
    <PanelTop
      img={img}
      name={name}
      isOpen={isOpen}
      onOpenId={onOpenId}
      id={id}
    />
    {isOpen && <PanelContent id={id} />}
  </div>
)

export default React.memo(Channel)
