import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Counter.css';


function Counter({ min = 1, max = 10 }) {
  let [ count, setCount ] = useState(min);

  function increaseCount() {
    if (count + 1 > max) {
      return;
    }

    setCount(count + 1);
  }

  function decreaseCount() {
    if (count - 1 < min) {
      return;
    }

    setCount(count - 1);
  }

  function countHandler(event) {
    let regexp = /[^\d]+/;
    if (min < 0) {
      regexp = /[^\d^-]+/;
    }

    let cleanValue = event.target.value.replace(regexp, '');
    let counterValue = Number(cleanValue);
    
    if (counterValue > max) {
      counterValue = max;
    } else if (counterValue < min && counterValue.length > 0) {
      counterValue = min;
    }
    
    setCount(counterValue);
  }

  return (
  <div className="counter">
    <button className="counter__button counter__minus" onClick={decreaseCount}>-</button>
    
    <input type="text" className="counter__input" 
      value={count} 
      onChange={countHandler} 
      style={{ width: String(count).length + 1 + 'ex' }} />
      
    <button className="counter__button counter__plus" onClick={increaseCount}>+</button>
  </div>
  );
}

export default Counter;

Counter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
