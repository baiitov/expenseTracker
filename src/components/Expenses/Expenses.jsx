import React, { useState, useEffect } from 'react'
import './Expenses.css'
import LoadingSpinner from '../UI/LoadingSpinner'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import { Route, useParams } from 'react-router-dom'
import useHttp from '../../hooks/UseHttp'
import Comment from '../comments/Comment'
import { getAllData } from '../../api/ExpenseService'
function Expenses(props) {
	
	
	const [filteredYear, setFilteredYear] = useState('2022')
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const { sendRequest, status, data, error } = useHttp(getAllData, true)

	useEffect(() => {
		sendRequest()
	}, [])
	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		)
	}

	const filteredExpenses = data.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	return (
		<Card className='expenses'>
			<Route path='/chart-bar'>
				<ExpensesChart expenses={filteredExpenses} />
			</Route>
			<Route path='/new-list' exact>
				<ExpensesFilter
					filteredYear={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesList expenses={filteredExpenses} />
			</Route>
			<Route path='/new-list/:commentId' exact>
				<Comment/>
			</Route>
		</Card>
	)
}

export default Expenses
