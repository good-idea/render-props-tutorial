import * as React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
	<ul>
		<Link to="/">Homepage</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/shop">Shop</Link>
	</ul>
)

export default Nav
