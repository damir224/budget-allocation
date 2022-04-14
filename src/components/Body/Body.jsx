import React, { useState } from 'react'

import AllChannels from '../AllChannels'
import Table from '../Table'
import TabSwitcher from '../TabSwitcher/TabSwitcher'
import TABS from '../../const/tabs'

const Body = () => {
  const [currentTab, setCurrentTab] = useState(TABS.TAB1)
  return (
    <div>
      <TabSwitcher currentTab={currentTab} onCurrentTab={setCurrentTab} />
      {currentTab === TABS.TAB1 && <AllChannels />}
      {currentTab === TABS.TAB2 && <Table />}
    </div>
  )
}

export default Body
