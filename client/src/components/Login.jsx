import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SignUpModal from './SignUpModal';

const login = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div style={loginContainer}>
      <div style={loginHeaderText}>Login</div>
      <form>
        <input style={loginInput} value={props.user} onChange={props.setLoginInfo} size='lg' placeholder="Username" id="user" />
      </form>
      <form>
        <input style={loginInput} value={props.password} onChange={props.setLoginInfo} size='lg' aria-describedby="passwordHelpBlock" id="password" placeholder="Password" />
      </form>
      {props.loginFailed &&
        <div style={loginFailedText}>Login not recognized. Please try again.</div>
      }
      <div style={loginButtonContainer}>
        <button onClick={props.testLogin} style={{ ...loginButtonStyle }}>Login</button>
        <button onClick={() => setModalShow(true)} style={{ ...loginButtonStyle, backgroundColor: '#E2474B' }}>Sign Up</button>
        <SignUpModal show={modalShow} onHide={() => { setModalShow(false) }} />
      </div>
      <div style={guestStyle} onClick={() => { props.setUser('guest') }}>Login as Guest</div>
    </div>
  )
}

const loginContainer = {
  width: '20vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}
const loginHeaderText = {
  fontSize: '3vw',
  alignSelf: 'flex-start'
}
const loginInput = {
  width: '20vw',
  height: '5vh',
  marginBottom: '10px',
  fontSize: '1.5vw',
  padding: '10px',
}
const loginFailedText = {
  width: '20vw',
  fontSize: '1.16vw',
  color: 'red',
  marginBottom: '10px'
}
const loginButtonContainer = {
  width: '20vw',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}
const loginButtonStyle = {
  width: '9.5vw',
  fontSize: '1.5vw',
  color: '#fff',
  backgroundColor: '#A1C5E2',
  textShadow: '1px 1px 2px #404040',
}

const guestStyle = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: 'solid',
  width: '10vw',
  fontSize: '1.5vw'
}

export default login;