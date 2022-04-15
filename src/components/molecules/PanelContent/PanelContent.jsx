import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import styles from './PanelContent.module.scss'
import BudgetBreakdown from '../BudgetBreakdown'
import updateBaseLineBudget from '../../../recoil/selectors/updateBaseLineBudget'
import updateBudgetFrequency from '../../../recoil/selectors/updateBudgetFrequency'
import { channelsState } from '../../../recoil/atoms/channels'
import Select from '../../atoms/Select'
import Regular from '../../atoms/Regular'
import CheckBox from '../../atoms/CheckBox'

const PanelContent = ({ id }) => {
  const channels = useRecoilValue(channelsState)

  const getChannelState = channels.find((el) => el.id === id)
  const setUpdateBaseLineBudget = useSetRecoilState(updateBaseLineBudget)
  const setUpdateBudgetFrequency = useSetRecoilState(updateBudgetFrequency)

  return (
    <div className={styles.panelContent}>
      <div className={styles.inputs}>
        <Select
          id={id}
          budgetFrequency={getChannelState.budgetFrequency}
          onUpdateBudgetFrequency={setUpdateBudgetFrequency}
        />
        <Regular
          id={id}
          budgetFrequency={getChannelState.budgetFrequency}
          baselineBudget={getChannelState.baselineBudget}
          isBudgetAllocation={getChannelState.budgetAllocation}
          onUpdateBaseLineBudget={setUpdateBaseLineBudget}
        />
        <CheckBox id={id} budgetAllocation={getChannelState.budgetAllocation} />
      </div>
      <BudgetBreakdown
        months={getChannelState.months}
        budgetAllocation={getChannelState.budgetAllocation}
        id={id}
      />
    </div>
  )
}

export default PanelContent
