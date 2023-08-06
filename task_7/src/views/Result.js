import React from 'react'

import { observer } from 'mobx-react-lite';
import useStore from './../hooks/useStore'

export default observer(function(){
	let [ cart, order ] = useStore('cart', 'order');
	console.log(order.lastOrderCache[0], ' <---');

	setTimeout(() => {
		console.log(order.lastOrderCache, ' <--- 2');
	}, 1000);

	return <div>
		<h1>{ order.data.name }, yout order is done!</h1>
		<hr/>
		<strong>Total: { cart.total }</strong>
		<hr />
		<h3>Your cart:</h3>
		<ul>
			{
				order.lastOrderCache.map((item) => 
					<li>
						<h4>{item.title}</h4>
					</li>
				)
			}
		</ul>
	</div>;
});