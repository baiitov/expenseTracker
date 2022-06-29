import React, { Component, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addNewData } from '../../api/ExpenseService'
import useHttp from '../../hooks/UseHttp'
import LoadingSpinner from '../UI/LoadingSpinner'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
function NewExpense() {
	const { sendRequest, data, error, status } = useHttp(addNewData)
	const history = useHistory()
	const AddData = (data) => {
		sendRequest(data)
	}
	if (status === 'pending') {
		return (
			<div>
				<LoadingSpinner />
			</div>
		)
	}
	if (status === 'completed') {
		history.push('/new-list')
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onAddData={AddData} />
		</div>
	)
}

export default NewExpense
