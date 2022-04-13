import React from 'react'
import styles from './Channel.module.scss'
import PanelTop from '../PanelTop'
import PanelContent from '../PanelContent'

export default React.memo(
  function Channel({ id, name, img, setIsOpen, isOpen }) {
    return (
      <div className={styles.container}>
        <PanelTop
          img={img}
          name={name}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          id={id}
        />
        {isOpen && <PanelContent id={id} />}
      </div>
    )
  },
  (prev, next) =>
    prev.id === next.id &&
    prev.img === next.img &&
    prev.name === next.name &&
    prev.key === next.key &&
    prev.isOpen === next.isOpen,
)
