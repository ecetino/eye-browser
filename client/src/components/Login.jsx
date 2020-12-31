import React from 'react';

const login = (props) => {
  return (
    <u onClick={props.setLoggedIn}>Sign in as guest</u>
  )
}

export default login;