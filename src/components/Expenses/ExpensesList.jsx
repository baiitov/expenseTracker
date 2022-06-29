import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
class ExpensesList extends Component {
	constructor() {
		super()
	}

	render() {
		if (this.props.expenses.length === 0) {
			return <h2 className='expenses-list'>No expense Found.</h2>
		}
		return (
			<ul className='expenses-list__fallback'>
				{this.props.expenses.map((el) => (
					<ExpenseItem
						key={el.id}
						id={el.id}
						date={el.date}
						text={el.title}
						price={el.amount}
					/>
				))}
			</ul>
		)
	}
}

export default ExpensesList
