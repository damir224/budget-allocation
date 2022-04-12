import React from 'react'
import Body from '../Body'
import Headers from '../Headers'
import styles from './Container.module.scss'

export default function Container() {
  return (
    <div className={styles.container}>
      <Headers />
      <Body />
    </div>
  )
}
