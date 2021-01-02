import React from 'react';

const login = (props) => {
  return (
    <div>
      <button type='button' className='btn btn-info' style={loginButtonStyle}>Login</button>
      <br/>
      <div style={guestStyle} onClick={props.setLoggedIn}><u>Sign in as guest</u></div>
    </div>
  )
}

const loginButtonStyle = {
  width: '150px',
  marginBottom: '20px',
}
const guestStyle = {
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  width: '150px',
  display: 'inline-block'
}

export default login;