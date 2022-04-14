import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'

import { channelsState } from '../../recoil/atoms/channels'
import Channel from '../Channel'

const AllChannels = () => {
  const channels = useRecoilValue(channelsState)
  const [openId, setOpenId] = useState(0)

  return (
    <div>
      {channels.map(({ id, name, img }) => (
        <Channel
          key={id}
          id={id}
          name={name}
          img={img}
          onOpenId={setOpenId}
          isOpen={id === openId}
        />
      ))}
    </div>
  )
}

export default AllChannels
