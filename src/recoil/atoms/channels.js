import { atom } from 'recoil'
import { cloneDeep } from 'lodash'

import newChannelTemplate from '../../const/newChannelTemplate'
import { v4 } from 'uuid'

export const channelsState = atom({
  key: 'channelsState',
  default: [{ ...cloneDeep(newChannelTemplate), id: v4() }],
})
