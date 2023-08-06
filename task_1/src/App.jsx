import React from 'react';
import Counter from './Counter.jsx';
import './css/style.css'; 

function App() {
  return (
    <>
      <Counter min={1} max={10} />
      <br />
      <br />
      <Counter min={1} max={100} />
      <br />
      <br />
      <Counter min={1} max={10000} />

      [<div></div>, <div></div>]
    </>
  );
}

export default App;
