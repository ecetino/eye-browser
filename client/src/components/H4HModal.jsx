import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const h4HModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark" id="contained-modal-title-vcenter">
          Shades for Humanity
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark" >
        <p>Looking Shady is committed to doing our part in the fight against homelessness. Round up at the checkout to donate towards Habitat for Humanity and we will match every donation made.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button size='lg' variant='primary' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default h4HModal;