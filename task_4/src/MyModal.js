import React from 'react';

import { Modal, Button } from 'react-bootstrap';

export default function MyModal({ show, title, text, cancelText, successText, onClose, onSuccess }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{ title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ text }</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          { cancelText }
        </Button>
        <Button variant="primary" onClick={onSuccess}>
          { successText }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
