import React from 'react'

import NameWithPopup from '../NameWithPopup'
import SwitchButton from '../SwitchButton'

const CheckBox = ({ id, budgetAllocation }) => {
  return (
    <div>
      <NameWithPopup
        name="Budget Allocation"
        tooltipContent="Decide how to distribute your yearly budget across months:
      Equally (equal monthly budget) or Manually (manually set a monthly budget)"
      />
      <SwitchButton id={id} budgetAllocation={budgetAllocation} />
    </div>
  )
}
export default CheckBox
