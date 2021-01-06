import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const h4HModal = (props) => {
  if (props.modalShow) {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.toggleModalShow}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  } else {
    return <div></div>
  }
}

export default h4HModal;