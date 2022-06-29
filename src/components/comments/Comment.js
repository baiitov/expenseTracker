import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleQuote } from '../../api/ExpenseService'
import useHttp from '../../hooks/UseHttp'
import { useEffect } from 'react'
import CommentItem from './CommentItem'
const Comment = (props) => {
	const params = useParams()
	const { commentId } = params
	const { data, status, sendRequest } = useHttp(getSingleQuote, true)
	useEffect(() => {
		sendRequest(commentId)
	}, [commentId, sendRequest])
      
	return (
		<div>
			{ data && <CommentItem title={data.title}  amount={data.amount} date={data.date}/>}
		</div>
	)
}

export default Comment
