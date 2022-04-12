import { selector } from 'recoil';
import copyObj from '../../helpers/copyObj';
import { channelsState } from '../atoms/channels';

const updateName = selector({
  key: 'updateName',
  get: ({ get }) => get(channelsState),
  set: ({ set }, { newName, id }) => {
    return set(channelsState, (prev) =>
      prev.reduce((acc, cur) => {
        let copyCh = copyObj(cur);
        if (cur.id === id) {
          copyCh.name = newName;
        }
        console.log('newName, id', newName, id);
        acc.push(copyCh);
        return acc;
      }, [])
    );
  },
});

export default updateName;
