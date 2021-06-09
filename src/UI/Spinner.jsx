import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({ type = 'border', variant = 'success' }) => {
  return (
    <div className={`spinner-${type} text-${variant}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

Spinner.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
}

export default Spinner
