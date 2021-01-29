import React from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import Login from './Login';
import eye from '../images/eye.png';

const home = (props) => {
  return (
    <div className='container-fluid text-center'>
      <img src={eye} className='img-fluid' style={eyeImageStyle} />
      <h1 className='display-2' style={welcomeStyle}>Welcome to Lazy Eye Trainer</h1>
      {!props.loggedIn &&
        <Login setLoggedIn={props.setLoggedIn}></Login>
      }
      {props.loggedIn &&
        <div >
          <h2 style={moduleStyle}>Please select a training module</h2>
          <div >
            <button style={moduleButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.setPage('KeyboardPractice') }}>Keyboard Practice</button>
            <button style={moduleButtonStyle} type='button' className='btn btn-secondary' onClick={() => { props.setPage('TargetPractice') }}>Target Practice</button>
            <button style={moduleButtonStyle} type='button' className='btn btn-danger' onClick={props.setPage.bind(this, 'BrowserPractice')}>Browser Practice</button>
          </div>
        </div>
      }
    </div>
  )
}

const welcomeStyle = {
  textShadow: '2px 2px 4px #404040',
  paddingBottom: '10px',
  fontFamily: 'Playfair Display SC'
}
const eyeImageStyle = {
  maxWidth: '60%',
  maxHeight: '60%',
  objectFit: 'cover',
  width: '700px',
  height: '320px',
  margin: '75px 25px 20px 25px'
}
const moduleStyle = {
  fontFamily: 'Playfair Display',
  textTransform: 'capitalize',
  fontSize: '40px',
  color: '#adb5bd'
}
const moduleButtonStyle = {
  margin: '5px',
  fontFamily: 'Playfair Display',
  color: 'white',
  textShadow: '1px 1px 2px #404040'
}
export default home;