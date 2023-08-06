import React, { useState } from 'react'
import Counter from './Counter';

export default function(){
	let [ maxTest, setMaxTest ] = useState(10);
	let setMaxTest5 = () => setMaxTest(5);

	return <div className="some">
		<h3>Fn max=5</h3>
		<Counter min={-4} max={5}/>
		<hr/>
		<h3>Fn 20,50</h3>
		<Counter min={20} max={50}/>
		<hr/>
		<div>
			<h3>Fn max=10</h3>
			<Counter min={1} max={maxTest} key={`1:${maxTest}`} />
		</div>
		<hr/>
		<button type="button" onClick={setMaxTest5}>Set 5</button>
	</div>;
}