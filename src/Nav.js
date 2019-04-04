import * as React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
	<nav>
		<Link to="/">Homepage</Link>
		<Link to="/sonnet">Sonnet</Link>
	</nav>
)

export default Nav
