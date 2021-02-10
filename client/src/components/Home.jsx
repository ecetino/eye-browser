import React from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import Login from './Login';
import eye from '../images/4432.svg';

const home = (props) => {
  return (
    <div style={homeContainer}>
      <div style={homeImageContainer}>
        <img src={eye} style={eyeImageStyle} />
        <h2 className='display-2' style={welcomeStyle}>Welcome to  <br /> Lazy Eye Trainer</h2>
      </div>
      <div style={homeLoginContainer}>
        {!props.loggedIn &&
          <Login testLogin={props.testLogin} loginFailed={props.loginFailed} setLoginFailed={props.setLoginFailed} setLoggedIn={props.setLoggedIn} setUser={props.setUser} user={props.user} password={props.password} confirmPassword={props.confirmPassword} setLoginInfo={props.setLoginInfo} ></Login>
        }
        {props.loggedIn &&
          <div >
            <h2 style={moduleStyle}>Please select a training module</h2>
            <div>
              <button style={moduleButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.setPage('KeyboardPractice') }}>Keyboard Practice</button>
              <button style={moduleButtonStyle} type='button' className='btn btn-secondary' onClick={() => { props.setPage('TargetPractice') }}>Target Practice</button>
              <button style={moduleButtonStyle} type='button' className='btn btn-danger' onClick={props.setPage.bind(this, 'BrowserPractice')}>Browser Practice</button>
            </div>
          </div>
        }
      </div>

    </div>
  )
}

const homeContainer = {
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: '2fr 1fr',
  alignContent: 'center'
}

const homeImageContainer = {
  gridColumnStart: 'col-start 0',
}

const homeLoginContainer = {
  gridColumnStart: 'col-start 1',
}

const welcomeStyle = {
  textShadow: '2px 2px 4px #404040',
  paddingBottom: '10px',
  fontFamily: 'Playfair Display SC'
}
const eyeImageStyle = {
  maxWidth: '80%',
  objectFit: 'cover',
  width: '400px',
  maxHeight: '400px',
  marginTop: '30px',
  display: 'inline'
}
const moduleStyle = {
  fontFamily: 'Playfair Display',
  textTransform: 'capitalize',
  fontSize: '40px',
  color: '#adb5bd',
  marginBottom: '20px'
}
const moduleButtonStyle = {
  margin: '5px',
  fontFamily: 'Playfair Display',
  color: 'white',
  textShadow: '1px 1px 2px #404040'
}
export default home;