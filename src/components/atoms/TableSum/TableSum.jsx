import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import styles from './TableSum.module.scss'
import edit from '../../../images/edit.svg'
import accept from '../../../images/accept.svg'
import decline from '../../../images/decline.svg'
import updateOneMonthBudget from '../../../recoil/selectors/updateOneMonthBudget'

const TableSum = ({ sum, id, name }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [curSum, setCurSum] = useState(sum)
  const setUpdateOneMonthBudget = useSetRecoilState(updateOneMonthBudget)

  return (
    <div className={styles.edit}>
      {isEdit ? (
        <>
          <input
            type="string"
            className={styles.input}
            defaultValue={curSum}
            onChange={(event) => setCurSum(event.target.value)}
          />
          <img
            className={styles.img}
            src={accept}
            alt="accept"
            onClick={() => {
              setUpdateOneMonthBudget({
                id,
                monthName: name,
                monthSum: curSum,
              })
              setIsEdit(!isEdit)
            }}
          />
          <img
            className={styles.img}
            src={decline}
            alt="decline"
            onClick={() => {
              setCurSum(sum)
              setIsEdit(!isEdit)
            }}
          />
        </>
      ) : (
        <>
          <span className={styles.sum}>${sum}</span>
          <img
            src={edit}
            alt="edit"
            className={styles.invisiblePen}
            onClick={() => setIsEdit(!isEdit)}
          />
        </>
      )}
    </div>
  )
}

export default TableSum
