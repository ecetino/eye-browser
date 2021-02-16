import React, { useState } from 'react';
import loginImg from '../images/loginImg.svg';
import SignUpModal from './SignUpModal';


const login = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  function guestLogin() {
    props.setUser('Guest');
    props.setView('main');
  }

  return (
    <div style={homeContainer}>
      <div style={homeImageContainer}>
        <div style={welcomeTextStyle}>
          <div style={{ ...welcomeTextStyle, marginRight: '10px', fontWeight: '100' }}>WELCOME TO</div>
          <div style={{ ...welcomeTextStyle, color: '#245478', }}>EYE BROWSER</div>
        </div>
        <img src={loginImg} style={eyeImageStyle} />
      </div>
      <div style={homeLoginContainer}>
        <div style={loginContainer}>
          <div style={loginHeaderText}>Login</div>
          <form>
            <input style={loginInput} value={props.user} onChange={(event) => {props.setUser(event.target.value)}} placeholder="Username" id="user" />
          </form>
          <form>
            <input style={loginInput} value={props.password} onChange={(event) => {props.setPassword(event.target.value)}} id="password" placeholder="Password" />
          </form>
          {props.loginFailed &&
            <div style={loginFailedText}>Login not recognized. Please try again.</div>
          }
          <div style={loginButtonContainer}>
            <button onClick={props.testLogin} style={{ ...loginButtonStyle }}>Login</button>
            <button onClick={() => setModalShow(true)} style={{ ...loginButtonStyle, backgroundColor: '#E2474B' }}>Sign Up</button>
            <SignUpModal show={modalShow} onHide={() => { setModalShow(false) }} />
          </div>
          <div style={guestStyle} onClick={guestLogin}>Login as Guest</div>
        </div>
      </div>
    </div>
  )
}

export default login;

const homeContainer = {
  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: '2fr 1fr',
  alignContent: 'center',
  height: '100vh',
  width: '100vw',
  textAlign: 'center',
  alignItems: 'center',
  fontFamily: 'Roboto'
}

const homeImageContainer = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}

const homeLoginContainer = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#245478',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}

const welcomeTextStyle = {
  color: '#555555',
  fontSize: 'clamp(3vh, 3vw, 100px)',
  display: 'flex',
  fontWeight: '300'
}

const eyeImageStyle = {
  width: '45vw',
  height: '80vh'
}

const moduleStyle = {
  textTransform: 'capitalize',
  fontSize: '2.52vw',
}

const moduleButtonStyle = {
  margin: '5px',
  color: 'white',
  textShadow: '1px 1px 2px #404040',
  fontSize: '2vw',
  backgroundColor: '#A1C5E2',
  borderRadius: '8px',
  padding: '5px 20px',
  fontWeight: '300'
}
const loginContainer = {
  width: '20vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white'
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
  borderRadius: '4px'
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
  justifyContent: 'space-between',
}
const loginButtonStyle = {
  width: '9.5vw',
  fontSize: '1.5vw',
  color: '#fff',
  backgroundColor: '#A1C5E2',
  textShadow: '1px 1px 2px #404040',
  borderRadius: '4px'
}
const guestStyle = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: 'solid',
  width: '10vw',
  fontSize: '1.5vw'
}