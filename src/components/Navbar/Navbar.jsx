import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'

import { routes } from '../../routes/routes'
import Alert from '../../store/Alert'

const Navbar = observer(() => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          LOGOTYPE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" activeClassName="active" className="nav-link" exact>
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="nav-link">
              About
            </NavLink>
            <NavLink to="/news" activeClassName="active" className="nav-link">
              News
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
})

export default Navbar
