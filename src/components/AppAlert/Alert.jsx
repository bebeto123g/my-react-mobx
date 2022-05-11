import React from 'react'
import { observer } from 'mobx-react'

import Alert from '../../store/Alert'

import './Alert.scss'

const AppAlert = observer(() => {
    console.log('render AppAlert')
    if (!Alert.isAlert) return <>{''}</>
    return (
        <div className={`alert alert-${Alert.variant}`} role="alert">
            <h2>{Alert.message}</h2>
        </div>
    )
})

export default AppAlert
