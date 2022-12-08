import { useState } from 'react'

import PtFormFilled from './PtFormFilled'
import PtFormUnfilled from './PtFormUnfilled'

const PtForm = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const formSubmitHandler = (e) => {
    setFormSubmitted(true)
    console.log('It changed')
  }

  return (
    <div>
      {formSubmitted && <PtFormFilled />} {!formSubmitted && <PtFormUnfilled />}
    </div>
  )
}

export default PtForm
