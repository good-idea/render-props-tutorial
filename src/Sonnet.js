import * as React from 'react'
import { Route } from 'react-router'
import Tabs from './Tabs'
import './Sonnet.css'

const sonnet = {
	lines: [
		'When forty winters shall besiege thy brow,',
		"And dig deep trenches in thy beauty's field,",
		"Thy youth's proud livery so gazed on now,",
		"Will be a tatter'd weed of small worth held: ",
		'Then being asked, where all thy beauty lies,',
		'Where all the treasure of thy lusty days; ',
		'To say, within thine own deep sunken eyes,',
		'Were an all-eating shame, and thriftless praise.',
		"How much more praise deserv'd thy beauty's use,",
		"If thou couldst answer 'This fair child of mine",
		"Shall sum my count, and make my old excuse,'",
		'Proving his beauty by succession thine!',
		'This were to be new made when thou art old,',
		"And see thy blood warm when thou feel'st it cold.",
	],
}

const Sonnet = ({ currentLength, changeLength }) => {
	return null
}

const Wrapper = () => (
	<Route>
		{({ location, history }) => (
			<div className="sonnet-container">
				<h1>Shakespeare by Word Length</h1>
				<h2>Sonnet 2</h2>
				<Tabs
					location={location}
					history={history}
					/* Sometimes passing all of the render prop stuff into another component can help make it all more readable */
					render={({ currentTab, switchTab }) => (
						<Sonnet currentLength={currentTab} changeLength={switchTab} />
					)}
				/>
			</div>
		)}
	</Route>
)

export default Wrapper
