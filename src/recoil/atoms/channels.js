import { atom } from 'recoil'
import { v4 } from 'uuid'

export const channelsState = atom({
  key: 'channelsState',
  default: [
    {
      id: v4(),
      name: 'Paid reviews',
      img: 'affiliateProgram.svg',
      budgetFrequency: '12',
      baselineBudget: '12,000',
      budgetAllocation: true,
      months: [
        { name: 'Jan 22', sum: '1,000.00' },
        { name: 'Feb 22', sum: '1,000.00' },
        { name: 'Mar 22', sum: '1,000.00' },
        { name: 'Apr 22', sum: '1,000.00' },
        { name: 'May 22', sum: '1,000.00' },
        { name: 'Jun 22', sum: '1,000.00' },
        { name: 'Jul 22', sum: '1,000.00' },
        { name: 'Aug 22', sum: '1,000.00' },
        { name: 'Sep 22', sum: '1,000.00' },
        { name: 'Oct 22', sum: '1,000.00' },
        { name: 'Nov 22', sum: '1,000.00' },
        { name: 'Dec 22', sum: '1,000.00' },
      ],
    },
  ],
})
