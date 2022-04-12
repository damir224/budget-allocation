import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import updateName from '../../recoil/selectors/updateName';
import styles from './ChannelIconName.module.scss';
import accept from '../../images/accept.svg';
import decline from '../../images/decline.svg';

export default function ChannelIconName({
  img,
  name,
  changeName,
  setChangeName,
  id,
}) {
  const setUpdateName = useSetRecoilState(updateName);
  const [inputName, setInputName] = useState(name);
  
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
            type='string'
            className={styles.input}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <img
            className={styles.inputImg}
            src={accept}
            alt='accept'
            onClick={() => {
              setUpdateName({ newName: inputName, id });
              setChangeName((prev) => !prev);
            }}
          />
          <img
            className={styles.inputImg}
            src={decline}
            alt='decline'
            onClick={() => {
              setInputName(name);
              setChangeName((prev) => !prev);
            }}
          />
        </>
      ) : (
        <p className={styles.name}>{name}</p>
      )}
    </div>
  );
}
