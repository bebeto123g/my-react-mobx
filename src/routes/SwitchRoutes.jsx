import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'
import Spinner from '../UI/Spinner'

const SwitchRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
        <Redirect to={'/'} />
      </Suspense>
    </Switch>
  )
}

export default SwitchRoutes
