import React from 'react'
import { Link } from 'gatsby'

const Nav: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page-2">Page 2</Link>
      </li>
      <li>
        <Link to="/app">App</Link>
      </li>
      <li>
        <Link to="/app/page-2">Page 2 of the app</Link>
      </li>
    </ul>
  )
}

export default Nav
