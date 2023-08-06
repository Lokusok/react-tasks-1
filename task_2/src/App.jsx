import React, { useState, useEffect } from 'react'
import MinMax from './MinMax.jsx';
import useWindowSize from './hooks/useWindowSize';


export default function(){
	let [ products, setProducts ] = useState(productsStub());
	let [ finallyPrice, setFinallyPrice ] = useState(getFinallyPrice());

	useEffect(() => {
		setFinallyPrice(getFinallyPrice());
	}, [products]);
	
	let setCnt = (id, cnt, inputRef) => {
		let productsNew = [...products];	
		let productChangeIndex = productsNew.findIndex((product) => product.id === id);
		productsNew[productChangeIndex] = { ...productsNew[productChangeIndex], cnt };

		const count = productsNew[productChangeIndex].cnt;
		inputRef.current.value = count;

		setProducts(productsNew);
	}

	function deleteProduct(id) {
		const productsNew = products.filter((product) => product.id !== id);
		setProducts(productsNew);
	}

	function getFinallyPrice() {
		return products.reduce((acc, current) => acc + current.price * current.cnt, 0);
	}

	let sizes = useWindowSize();
	let { width } = sizes;

	return <div className="some">
		<h1>Products list</h1>
		<table>
			<tbody>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
				</tr>
				{ products.map((pr, i) => (
					<tr key={pr.id}>
						<td>{ i + 1 }</td>
						<td>{ pr.title }</td>
						<td>{ pr.price }</td>
						<td>
							<MinMax max={pr.rest} current={pr.cnt} 
								onChange={(cnt, inputRef) => setCnt(pr.id, cnt, inputRef)} />
						</td>
						<td>
							<button onClick={() => deleteProduct(pr.id)}>Delete</button>
						</td>
					</tr>
				)) }
			</tbody>
		</table>
		<hr />
		<h3>
			Finally price: <u>{finallyPrice}</u>
		</h3>
	</div>;
}

function productsStub(){
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
}

/* 
let setCnt = (id, cnt) => {
	let newProducts = [ ...products ];
	let productInd = products.findIndex(pr => pr.id == id);
	let newProduct = { ...products[productInd] };
	newProduct.cnt = cnt;
	newProducts[productInd] = newProduct;
	setProducts(newProducts);
} */

/*

function fn(i, ev){

}

let elems = document.querySeelctorAll('some');

elems.forEach((el, i) => {
	el.addEventListener('click', e => fn(i, e))

});


*/