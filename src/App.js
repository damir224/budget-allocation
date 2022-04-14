import React from 'react'
import Body from './components/Body'
import Headers from './components/Headers'
import styles from './App.module.scss'

const App = () => (
  <div className={styles.container}>
    <Headers />
    <Body />
  </div>
)

export default App
