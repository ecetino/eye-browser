import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Login from './Login';
import Main from './Main';
import '../style.scss';

const app = (props) => {
  const [view, setView] = React.useState('login');
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginFailed, setLoginFailed] = React.useState(false);
  const [keyboardRecs, setKeyboardRecs] = React.useState([]);
  const [targetRecs, setTargetRecs] = React.useState([]);

  useEffect(() => {
    getKeyboardRecords();
    getTargetRecords();
  }, [])

  useEffect(() => {}, [user, password, view, keyboardRecs, targetRecs])

  async function getKeyboardRecords() {
    try {
      const recs = await Axios.get('/keyboardRecs');
      setKeyboardRecs(recs.data);
    } catch (err) {
      console.error(err)
    }
  }

  async function getTargetRecords() {
    try {
      const recs = await Axios.get('/targetRecs');
      setTargetRecs(recs.data);
    } catch (err) {
      console.error(err)
    }
  }

  async function testLogin() {
    try {
      const result = await Axios.get(`/userAuth/${user}/?password=${password}`);
      if (result.data) {
        setView('main');
      } else {
        setLoginFailed(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function addTargetRec(time) {
    try {
      const result = await Axios.post('/addTargetRec', {
        user: user,
        time: `${Math.floor(time / 10)}.${time % 10}`
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function addKeyboardRec(streak) {
    try {
      const result = await Axios.post('/addKeyboardRec', {
        user: user,
        streak: streak
      });
    } catch (err) {
      console.error(err);
    }
  }

  if (view === 'login') {
    return <Login testLogin={testLogin} loginFailed={loginFailed} setLoginFailed={setLoginFailed} setUser={setUser} setPassword={setPassword} password={password} user={user} setView={setView}/>
  } else {
    return <Main getKeyboardRecords={getKeyboardRecords} addKeyboardRec={addKeyboardRec} keyboardTableData={keyboardRecs} getTargetRecords={getTargetRecords} addTargetRec={addTargetRec} targetTableData={targetRecs}></Main>
  }
}

export default app;
