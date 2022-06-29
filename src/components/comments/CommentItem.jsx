import React from 'react'
import './CommentItem.css'

import Card from '../UI/Card'
import ExpenseDate from '../Expenses/ExpenseDate'
const CommentItem = (props) => {
	const date = new Date(props.date)

	return (
		<div>
			<Card className='expense-item'>
				<ExpenseDate date={date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>

					<div className='expense-item__price'>{props.amount}</div>
				</div>
			</Card>
		</div>
	)
}

export default CommentItem
