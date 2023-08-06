import React from 'react'

import useStore from '../hooks/useStore'
import { observer } from 'mobx-react-lite';

import { Link } from 'react-router-dom'

import CartButton from './../components/CartButton';


export default observer(Home);

function Home(){
	let [ productsStore, cartStore ] = useStore('products', 'cart');
	let { products } = productsStore;

	return <div>
		<h1>Catalog</h1>
		<hr/>
		<div className="row">
		{ products.map((pr) => (
			<div className="col col-4 mb-3 mt-3" key={pr.id}>
				<div className="card">
					<div className="card-body">
						<h3>{ pr.title }</h3>
						<div>Price: { pr.price }</div>

						<div className="row align-items-center">
							<div className="col-6">
								<Link to={`/product/${pr.id}`}>Read more</Link>
							</div>

							<div className="col-6">
								<CartButton productId={pr.id} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)) }
		</div>
	</div>;
}