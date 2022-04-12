import React, { useState } from 'react';
import cn from 'classnames';

import styles from './PanelTop.module.scss';
import arrow from '../../images/arrow.svg';
import threeDots from '../../images/threeDots.svg';
import ChannelIconName from '../ChannelIconName';
import { useSetRecoilState } from 'recoil';
import deleteChannel from '../../recoil/selectors/deleteChannel';

export default function PanelTop({ name, img, isOpen, setIsOpen, id }) {
  const [openDots, setOpenDots] = useState(false);
  const [changeName, setChangeName] = useState(false);
  const setDeleteChannel = useSetRecoilState(deleteChannel);

  return (
    <div
      className={cn(styles.panel, { [styles.panelOpen]: isOpen })}
      onClick={(e) =>
        !/(dots|input)/g.test(e.target.className) &&
        setIsOpen({ id, open: !isOpen })
      }
    >
      <div className={styles.left}>
        <img
          className={cn(styles.arrow, { [styles.rotate]: !isOpen })}
          src={arrow}
          alt='arrow'
        />
        <ChannelIconName
          img={img}
          name={name}
          changeName={changeName}
          setChangeName={setChangeName}
          id={id}
        />
      </div>
      <div className={styles.dots} onClick={() => setOpenDots(!openDots)}>
        <img className={styles.dotsImg} src={threeDots} alt='open options' />
        <div
          className={cn(styles.dotsContent, { [styles.dotsActive]: openDots })}
        >
          <p onClick={() => setChangeName(true)} className={styles.dotsText}>
            Edit
          </p>
          <p
            onClick={() => setDeleteChannel({ id })}
            className={cn(styles.dotsText, styles.dotsTextDanger)}
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  );
}
