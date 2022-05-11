import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import { routes } from '../../routes/routes'
import Auth from '../../store/Auth'

const Navigation = observer(() => {
    console.log('render Navigation')
    return (
        <div className="navbar-nav">
            {routes.map(({ isAuth, exact, title, path }) => {
                if (isAuth && !Auth.isLogin) return
                return (
                    <NavLink
                        to={path || '/'}
                        activeClassName="nav-link--active text-success"
                        className="nav-link"
                        exact={exact}
                        key={title + path}
                    >
                        {title || `Домой`}
                    </NavLink>
                )
            })}
        </div>
    )
})

export default Navigation
