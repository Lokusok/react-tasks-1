import React from 'react'
import { useMemo } from 'react';

import { Table } from 'react-bootstrap';


export default function({ products, onPrev, userData }){
	let finallyPrice = useMemo(() => {
		return products.reduce((acc, product) => acc + product.price, 0);
	}, [products]);

	return <div>
		<h1>Result screen</h1>
		<hr />

		<h3>Your data</h3>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Your Email</th>
						<th>Your name</th>
						<th>Your address</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{
							Object.keys(userData).map((key) => 
								<td>{userData[key]}</td>
							)
						}
					</tr>
				</tbody>
			</Table>
		<hr />
		<h3>Result price: <u>{finallyPrice}</u></h3>
		<hr />
		<button className="btn btn-warning" onClick={onPrev}>Go to order data</button>
	</div>;
}