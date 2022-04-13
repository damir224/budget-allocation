import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'

import { channelsState } from '../../recoil/atoms/channels'
import Channel from '../Channel'

export default function AllChannels() {
  const channels = useRecoilValue(channelsState)
  const [isOpen, setIsOpen] = useState({ id: null, open: false })

  return (
    <div>
      {channels.map(({ id, name, img }) => (
        <Channel
          key={id}
          id={id}
          name={name}
          img={img}
          setIsOpen={setIsOpen}
          isOpen={id === isOpen.id ? isOpen.open : false}
        />
      ))}
    </div>
  )
}
