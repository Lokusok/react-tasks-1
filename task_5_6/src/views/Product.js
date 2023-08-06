import React, { useContext } from 'react'

import useStore from '../hooks/useStore'
import { observer } from 'mobx-react-lite';

import SettingsContext from './../contexts/store';
import { Link, useParams } from 'react-router-dom'
import CartButton from './../components/CartButton';

export default observer(Product);

function Product(){
	let params = useParams();
	let ctx = useContext(SettingsContext);
	
	const product = ctx.products.getProductById(params.id);

	return (<div>
		<h1>{ product.title }</h1>
		<hr/>
		<div className="container">
			<div className="row">
				<div className="col col-6">
					<h3>Price: <u>{ product.price }</u></h3>
				</div>

				<div className="col col-6 d-flex justify-content-end">
					<CartButton productId={params.id} />
				</div>
			</div>
		</div>

	</div>);
}