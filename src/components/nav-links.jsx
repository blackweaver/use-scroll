import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <Fragment>
    <Link to={`/navbar`}>Navbar</Link>
    <Link to={`/sidebar`}>Sidebar</Link>
    <Link to={`/position`}>Position</Link>
  </Fragment>
)
