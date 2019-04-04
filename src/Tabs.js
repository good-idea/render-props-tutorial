import React from 'react'

class Tabs extends React.Component {
	state = {
		currentTab: this.props.initialTab || 0,
	}

	switchTab = index => {
		this.setState(
			{
				currentTab: index,
			},
			/*
			 Pass updateHistory as a callback to this.setState.
			 This makes sure that it fires *after* setState has completed.
			 (See the async method below for an alternate way to do this.)

			 Comment out the callback and remove the comments below, so updateHistory is called
			 immediately after setState. Then, see how it behaves in the browser!
		     👇  👇  👇*/
			this.updateHistory,
		)
		// this.updateHistory() // 👈 Try using this one instead of the callback!
	}

	asyncSwitchTab = async index => {
		/* I think this one reads a little nicer! But they do the same thing */
		await this.setState({
			currentTab: index,
		})
		this.updateHistory()
	}

	updateHistory = () => {
		console.log(this.props)
		const { currentTab } = this.state
		const { history } = this.props
		const { push, location } = history
		const { pathname } = location

		push(`${pathname}?tab=${currentTab}`)
	}

	render() {
		const { render } = this.props

		const renderProps = {
			currentTab: this.state.currentTab,
			switchTab: this.switchTab,
		}

		return render(renderProps)
	}
}

/**
	In this demo, we are using the <Route> 'children' prop to get the location and history,
	which we pass along to the Tabs component.

	In practice, this would get tedious - you would need to do the same thing every time you wanted
	to use <Tabs>. A better way to achive this would be by using the `withRouter` HOC provided by RR.

	We would simply change our export to look like this:

	export default withRouter(Tabs)

	(But since this lesson is about render props we're using render props!)

*/
export default Tabs
