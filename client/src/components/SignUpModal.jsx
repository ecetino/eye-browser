import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const signUpModal = (props) => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [notSame, setNotSame] = React.useState(false);

  useEffect(() => {}, [user, password, confirmPassword])

  function checkPasswords () {
    if (password === confirmPassword) {
      addUser();
    } else {
      setNotSame(true);
    }
  }

  async function addUser () {
    try {
      const result = await Axios.post('/addUser', {
         user: user,
         password: password
        });
      props.onHide();
    } catch (err) {
      console.error(err);
    }
  }

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
          <Form.Group controlId="username">
            <Form.Control value={user} onChange={e => setUser(e.target.value)} size='lg' placeholder="Username" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control value={password} onChange={e => setPassword(e.target.value)} size='lg' aria-describedby="passwordHelpBlock" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Control value={confirmPassword} size='lg' aria-describedby="passwordHelpBlock" onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
          </Form.Group>
        </Form>
        {notSame &&
        <h5 className='text-danger'>Passwords are not the same.</h5>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={checkPasswords}>Sign Up</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default signUpModal;