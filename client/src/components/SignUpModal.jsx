import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const signUpModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark" id="contained-modal-title-vcenter">
          Create Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark" >
        <Form>
          <Form.Group controlId="usernameForm">
            <Form.Control size='lg' type="username" placeholder="Username" />
          </Form.Group>
          <Form.Group controlId="passwordForm">
            <Form.Control size='lg' aria-describedby="passwordHelpBlock" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="passwordForm">
            <Form.Control size='lg' aria-describedby="passwordHelpBlock" type="confirmPassword" placeholder="Confirm Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>Sign Up</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default signUpModal;