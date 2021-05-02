import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import { routes } from '../../routes/routes'
import Alert from '../../store/Alert'

const Navbar = observer(() => {
  return (
    <div className="Navbar">
      {routes.map(({ title, path, exact }) => (
        <NavLink to={path} exact={exact} key={path + title}>
          {title}
        </NavLink>
      ))}
      <button onClick={() => Alert.show({ message: 'сообщение из навбара' })}>
        Alert
      </button>
    </div>
  )
})

export default Navbar
