import { useRef, useEffect } from 'react';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import useClickOutside from './hooks/useClickOutside';


export default function MyModal({ closeFn }) {
  let modalWrapperRef = useRef(null);
  useClickOutside(modalWrapperRef, closeFn);

  return (
    <Modal show={true} onHide={ closeFn }>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={ closeFn }>Save changes</Button>
        </Modal.Footer>
    </Modal>    
  );
}