import React from 'react'

import { observer } from 'mobx-react-lite';
import useStore from './../hooks/useStore'

import Total from './../components/Total';

export default observer(function(){
	let [ cart, order ] = useStore('cart', 'order');

	return <div>
		<h1>{ order.data.name }, yout order is done!</h1>
		<hr/>
		<strong>
			<Total />
		</strong>
	</div>;
});