import React from 'react'
import { observer } from 'mobx-react'

import Alert from '../../store/Alert'

import './Alert.scss'

const AppAlert = observer(() => {
  if (!Alert.isAlert) return <>{''}</>
  return (
    <div className='alert'>
      <h2>{Alert.message}</h2>
    </div>
  )
})

export default AppAlert
