import React, { useMemo } from 'react'
import cn from 'classnames'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Popup from 'reactjs-popup'
import './popup.css'
import styles from './PanelContent.module.scss'
import tooltipInfo from '../../images/tooltipInfo.svg'
import SwitchButton from '../SwitchButton'
import BudgetBreakdown from '../BudgetBreakdown'
import updateBaseLineBudget from '../../recoil/selectors/updateBaseLineBudget'
import updateBudgetFrequency from '../../recoil/selectors/updateBudgetFrequency'
import { channelsState } from '../../recoil/atoms/channels'

export default function PanelContent({ id }) {
  const channels = useRecoilValue(channelsState)
  const getChannelState = useMemo(
    () => channels.find((el) => el.id === id),
    [channels, id],
  )
  const setUpdateBaseLineBudget = useSetRecoilState(updateBaseLineBudget)
  const setUpdateBudgetFrequency = useSetRecoilState(updateBudgetFrequency)

  return (
    <div className={styles.panelContent}>
      <div className={styles.inputs}>
        <div className={styles.freq}>
          <div className={styles.upper}>
            <span className={styles.upperName}>Budget Frequency</span>
            <Popup
              trigger={<img src={tooltipInfo} alt="tooltip info" />}
              position="top center"
              on={['hover', 'focus']}
              arrow={'top center'}
            >
              <span className={styles.tooltipContent}>
                You can set a yearly, quarterly, or monthly budget for this
                channel
              </span>
            </Popup>
          </div>
          <select
            className={cn(styles.select, styles.input)}
            value={getChannelState.budgetFrequency}
            onChange={(e) =>
              setUpdateBudgetFrequency({ newValue: e.target.value, id })
            }
          >
            <option value="1">Annually</option>
            <option value="12">Monthly</option>
            <option value="4">Quarterly</option>
          </select>
        </div>
        <div className={styles.base}>
          <div className={styles.upper}>
            <span className={styles.upperName}>Baseline [Annual] Budget</span>
            <Popup
              trigger={<img src={tooltipInfo} alt="tooltip info" />}
              position="top center"
              on={['hover', 'focus']}
              arrow={'top center'}
            >
              <span className={styles.tooltipContent}>
                Set an annual budget for this chanel - you'll be able to break
                it down to months in the following step.
              </span>
            </Popup>
          </div>
          <input
            disabled={!getChannelState.budgetAllocation}
            type="text"
            className={styles.input}
            value={getChannelState.baselineBudget}
            onChange={(e) =>
              setUpdateBaseLineBudget({ id, newValue: e.target.value })
            }
          />
        </div>
        <div className={styles.alloc}>
          <div className={styles.upper}>
            <span className={styles.upperName}>Budget Allocation</span>
            <Popup
              trigger={<img src={tooltipInfo} alt="tooltip info" />}
              position="top center"
              on={['hover', 'focus']}
              arrow={'top center'}
            >
              <span className={styles.tooltipContent}>
                Decide how to distribute your yearly budget across months:{' '}
                <b>Equally</b> (equal monthly budget) or <b>Manually</b>{' '}
                (manually set a monthly budget)
              </span>
            </Popup>
          </div>
          <SwitchButton
            id={id}
            budgetAllocation={getChannelState.budgetAllocation}
          />
        </div>
      </div>
      <BudgetBreakdown
        months={getChannelState.months}
        budgetAllocation={getChannelState.budgetAllocation}
        id={id}
      />
    </div>
  )
}
