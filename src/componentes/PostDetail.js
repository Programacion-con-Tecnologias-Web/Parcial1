import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PostDetail = ({ show, handleClose, imageUrl }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} className="img-fluid" alt="Post" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostDetail;
