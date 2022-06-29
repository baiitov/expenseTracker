// import logo from './logo.svg';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { Component, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout'


class App extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className='App'>
				<Layout>
					<Switch>
						<Route path='/' exact>
							<Redirect to='/form' />
						</Route>
						<Route path='/form' exact>
							<NewExpense />
						</Route>

						<Expenses />
					</Switch>
				</Layout>
			</div>
		)
	}
}

export default App
