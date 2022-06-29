import React, { Component } from 'react'
import './ExpenseDate.css'
class ExpenseDate extends Component {
	constructor() {
		super()
	}

	render() {
		const month = this.props.date.toLocaleString('en-Us', {
			month: 'long',
		})
		const day = this.props.date.toLocaleString('en-Us', {
			day: '2-digit',
		})
		const year = this.props.date.getFullYear()
		return (
			<div className='expense-date'>
				<div className='expense-date__month'>{month}</div>
				<div className='expense-date__day'>{day}</div>
				<div className='expense-date__year'>
					{year === 2021
						? '1 год назад'
						: year === 2020
						? '2 год назад'
						: year}
				</div>
			</div>
		)
	}
}

export default ExpenseDate
