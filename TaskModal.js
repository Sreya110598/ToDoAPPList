import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TaskModal = ({ show, onClose, title, body, onSave }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
