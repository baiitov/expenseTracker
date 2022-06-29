import React, { Component, useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Comment from '../comments/Comment'
class ExpenseItem extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<Card className='expense-item'>
				<ExpenseDate date={this.props.date} />
				<div className='expense-item__description'>
					<h2>{this.props.text}</h2>
					<Link to={`/new-list/${this.props.id}`} className='btn'>
						View Fullscreen
					</Link>
					<div className='expense-item__price'>
						{this.props.price}
					</div>
				</div>
				{/* <Route path='/new-list/:commentId' exact>
					<Comment id={this.props.id} />
				</Route> */}
			</Card>
		)
	}
}

export default ExpenseItem
