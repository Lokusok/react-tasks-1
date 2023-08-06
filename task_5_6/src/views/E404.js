import React from 'react'
import { Link } from 'react-router-dom'

export default function(){
	return <div>
		<h1>Page not found</h1>
		<hr/>
		Start from <Link to="/">main page</Link>
	</div>
}