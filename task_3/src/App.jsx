import { useState } from 'react';

import { Button } from 'react-bootstrap';
import MyModal from './MyModal';


export default function App() {
  let [ modalVisibility, setModalVisibility ]  = useState(false);
  console.log(modalVisibility)

  function toggleModalVisibility() {
    setModalVisibility(!modalVisibility);
  }

  return (
    <>
      <Button onClick={toggleModalVisibility}>
        Open modal
      </Button>

      {
        modalVisibility && <MyModal closeFn={ toggleModalVisibility } />
      }

    </>
  );
}

