import { useState } from 'react';
import AppCounter from './AppCounter.jsx';

function App() {
  let [counters, setCounters] = useState([
    { min: 1, max: 10, coff: 20 },
    { min: 1, max: 3, coff: 50 },
  ]);

  function deleteCounter(index) {
    let countersNew = [...counters];
    countersNew.splice(index, 1);
    setCounters(countersNew);
  }

  return <div>
    {
      counters.map((counter, index) => 
        <AppCounter 
          min={counter.min} 
          max={counter.max}
          coff={counter.coff}
          deleteCallback={(index) => deleteCounter(index)}
          key={index} />)
    }
  </div>
}

export default App;