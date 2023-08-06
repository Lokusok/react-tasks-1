import { useState } from 'react';
import './AppCounter.css';

function AppCounter({ min, max, coff, deleteCallback }) {
  let [ counter, setCounter ] = useState(1);
  let counterCoff = coff;
  let size = counter * counterCoff;

  function increaseCounter() {
    if (counter + 1 > max) {
      return;
    }

    setCounter(counter + 1);
  }

  function decreaseCounter() {
    if (counter - 1 < min) {
      return;
    }

    setCounter(counter - 1);
  }

  function deleteCounter() {
    deleteCallback();
  }

  return <div className="counter">
    <div>
      <button onClick={decreaseCounter}>Уменьшить</button>
      <button onClick={increaseCounter}>Увеличить</button>
      <br />
      <button onClick={deleteCounter}>Удалить</button>
    </div>

    <div>
      <div className="circle" style={{ width: size, height: size }}></div>
    </div>
  </div>
}

export default AppCounter;