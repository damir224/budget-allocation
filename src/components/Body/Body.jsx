import React, { useState } from 'react'
import AllChannels from '../AllChannels'
import Table from '../Table'
import TabSwitcher from '../TabSwitcher/TabSwitcher'
import styles from './Body.module.scss'

export default function Body() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <div>
      <TabSwitcher currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      {currentTab === 1 && <AllChannels />}
      {currentTab === 2 &&  <Table /> }
    </div>
  )
}
