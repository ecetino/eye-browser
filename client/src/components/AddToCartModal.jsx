import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const addToCart = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark" id="contained-modal-title-vcenter">
          Item Added
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark" >
        <h5>Add Ons</h5>
        <Form.Group>
          <Form.Check type="checkbox" label="1 Year Protection Plan- $29.99" />
          <Form.Check type="checkbox" label="Leather Case- $14.99" />
          <Form.Check type="checkbox" label="Cleaning Cloth- $2.99" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button size='lg' color='white' variant='warning' onClick={props.onHide}>Add to Cart</Button>
        <Button size='lg' variant='primary' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default addToCart;