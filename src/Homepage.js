import * as React from 'react'
import { Route } from 'react-router'
import Tabs from './Tabs'

const Tab = props => {
	const { title, visible, children } = props

	const styles = {
		display: visible ? 'block' : 'none',
	}

	return (
		<div className="tab" style={styles}>
			<h2>{title}</h2>
			{children}
		</div>
	)
}

const Homepage = () => {
	return (
		<main>
			<h1>Homepage</h1>
			<Route
			/**
			 * Use RR's "component" prop when you want the simplest behavior:
			 * render my compoment if the path matches.
			 *
			 * Use 'render' when you only want to render when the path matches, and
			 * want a little extra control over what happens next.
			 *
			 * Use the 'children' prop when you want it to *always* render, no
			 * matter what the path is.
			 *
			 * I think that RR's documented use of the 'children={...}' prop is a
			 * little confusing. Remember in the lesson when we talked about how
			 * any component with nested JSX receives them as props.children? Here
			 * it is in practice:
			 *
			 * I removed the 'children={({ location, history }) => { ... }}' prop,
			 * and just put the function inbetween the JSX tags:
			 *
			 * <Route>
			 *   {(routeRenderProps) => {
			 * 		// ...etc
			 * 	}}
			 * </Route>
			 *
			 * It's important to note that the prop names here are not anything
			 * magic or specific. The authors of RR could have named this prop
			 * 'renderWithRouteInfo' or anything else. Generally, components will
			 * employ a render prop pattern with either a prop named 'render', or
			 * by using props.children as a function, as we are doing here.
			 */
			>
				{({ location, history }) => {
					const { search } = location
					const initialTab = parseInt(search.replace('?tab=', ''))

					return (
						<Tabs
							history={history}
							initialTab={initialTab}
							render={({ currentTab, switchTab }) => {
								console.log(`current tab: ${currentTab}`)
								return (
									<div>
										<div className="tab__headers">
											<button onClick={() => switchTab(0)}>Tab 1</button>
											<button onClick={() => switchTab(1)}>Tab 2</button>
											<button onClick={() => switchTab(2)}>Tab 3</button>
										</div>
										<Tab visible={currentTab === 0} title="One">
											<p>This is tab one!</p>
										</Tab>
										<Tab visible={currentTab === 1} title="Two">
											<p>This is tab two!</p>
										</Tab>
										<Tab visible={currentTab === 2} title="Three">
											<p>This is tab three!</p>
										</Tab>
									</div>
								)
							}}
						/>
					)
				}}
			</Route>
			/>
		</main>
	)
}

export default Homepage
