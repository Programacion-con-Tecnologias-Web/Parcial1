import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const PostDetail = ({ show, handleClose, imageUrl }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><FormattedMessage id="post_detail.post_details" /></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} className="img-fluid" alt="Post" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <FormattedMessage id="post_detail.close" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostDetail;
