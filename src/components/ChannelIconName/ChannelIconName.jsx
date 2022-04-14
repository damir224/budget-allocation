import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import updateName from '../../recoil/selectors/updateName'
import styles from './ChannelIconName.module.scss'
import accept from '../../images/accept.svg'
import decline from '../../images/decline.svg'

const ChannelIconName = ({ img, name, changeName, onChangeName, id }) => {
  const setUpdateName = useSetRecoilState(updateName)
  const [inputName, setInputName] = useState(name)

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src={require(`/src/images/${img}`)}
        alt={name}
      />
      {changeName ? (
        <>
          <input
            type="string"
            className={styles.input}
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
          <img
            className={styles.inputImg}
            src={accept}
            alt="accept"
            onClick={() => {
              setUpdateName({ newName: inputName, id })
              onChangeName((previousName) => !previousName)
            }}
          />
          <img
            className={styles.inputImg}
            src={decline}
            alt="decline"
            onClick={() => {
              setInputName(name)
              onChangeName((previousName) => !previousName)
            }}
          />
        </>
      ) : (
        <p className={styles.name}>{name}</p>
      )}
    </div>
  )
}
export default ChannelIconName
