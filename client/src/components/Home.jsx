import React from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import Login from './Login';
import eye from '../images/4432.svg';


const home = (props) => {
  return (
    <div style={homeContainer}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet"></link>
      <div style={homeImageContainer}>
        <div style={welcomeTextStyle}>
          <div style={{...welcomeTextStyle, marginRight: '10px', fontWeight: '100'}}>WELCOME TO</div>
          <div style={{...welcomeTextStyle, color: '#245478',}}>EYE BROWSER</div>
        </div>
        <img src={eye} style={eyeImageStyle} />
      </div>
      <div style={homeLoginContainer}>
        {!props.loggedIn &&
          <Login testLogin={props.testLogin} loginFailed={props.loginFailed} setLoginFailed={props.setLoginFailed} setLoggedIn={props.setLoggedIn} setUser={props.setUser} user={props.user} password={props.password} confirmPassword={props.confirmPassword} setLoginInfo={props.setLoginInfo} ></Login>
        }
        {props.loggedIn &&
          <div >
            <div style={moduleStyle}>Please select a training module</div>
            <div>
              <button style={moduleButtonStyle} onClick={() => { props.setPage('KeyboardPractice') }}>Keyboard Practice</button>
              <button style={{ ...moduleButtonStyle, backgroundColor: '#C0C0C0' }} onClick={() => { props.setPage('TargetPractice') }}>Target Practice</button>
              <button style={{ ...moduleButtonStyle, backgroundColor: '#E63946' }} onClick={props.setPage.bind(this, 'BrowserPractice')}>Browser Practice</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

const homeContainer = {
  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: '2fr 1fr',
  alignContent: 'center',
  height: '100vh',
  width: '100wh',
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
  fontSize: '3vw',
  display: 'flex',
  fontWeight: '300'
}

const eyeImageStyle = {
  width: '45vw'
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
  padding: '5px 20px'
}

export default home;