import React, { useRef } from 'react'
import PropTypes from 'prop-types';

MinMax.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

function MinMax({ min = 1, max, current, onChange }){
	let inputRef = useRef(0);

	function applyCurrent(num){
		let validNum = Math.max(min, Math.min(max, num));
		onChange(validNum, inputRef);
	}

	function applyChecker(num) {
		let result = isNaN(num) ? min : num;
		applyCurrent(result);

		return result === num;
	}

	function parseCurrentStr(e){
		let num = parseInt(e.target.value);
		applyChecker(num);
	}

	function enterDownHandler(event) {
		if (event.keyCode !== 13) {
			return;
		}

		let isOk = applyChecker(Number(inputRef.current.value));
		isOk ? inputRef.current.blur() : {};
	}

	let inc = () => applyCurrent(current + 1);
	let dec = () => applyCurrent(current - 1);

	return <div>
		<button type="button" onClick={ dec }>-</button>
		<input 
			type="text" 
			defaultValue={ current } 
			onKeyDown={enterDownHandler}
			onBlur={parseCurrentStr} 
			ref={inputRef}
		/>
		<button type="button" onClick={ inc }>+</button>
	</div>
}

export default MinMax;