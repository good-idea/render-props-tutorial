import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Homepage from './Homepage'
import Nav from './Nav'
import Sonnet from './Sonnet'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/sonnet" exact component={Sonnet} />
				</Switch>
			</div>
		)
	}
}

export default App
