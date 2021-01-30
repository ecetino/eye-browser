import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SignUpModal from './SignUpModal';

const login = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [loginFailed, setLoginFailed] = React.useState(true);

  return (
    <div className='container-fluid' style={loginContainer}>
      <Form>
        <Form.Group controlId="user">
          <Form.Control value={props.user} onChange={props.setLoginInfo} size='lg' placeholder="Username"  />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control value={props.password} onChange={props.setLoginInfo} size='lg' aria-describedby="passwordHelpBlock" type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      {loginFailed &&
        <div className="text red">Error</div>
      }
      <button type='button' className='btn btn-info' style={loginButtonStyle}>Login</button>
      <button type='button' className='btn btn-danger' onClick={() => setModalShow(true)} style={signUpButtonStyle}>Sign Up</button>
      <SignUpModal show={modalShow} onHide={() => { setModalShow(false) }} />
      <br />
      <div style={guestStyle} onClick={() => { props.setUser('guest') }}><u>Sign in as guest</u></div>
    </div>
  )
}

const loginContainer = {
  width: '350px',
}

const loginButtonStyle = {
  width: '150px',
  marginBottom: '20px',
  fontFamily: 'Playfair Display SC'
}

const signUpButtonStyle = {
  width: '150px',
  marginBottom: '20px',
  fontFamily: 'Playfair Display SC',
  marginLeft: '20px'
}

const guestStyle = {
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  width: '300px',
  display: 'inline-block',
  fontSize: '23px'
}

export default login;