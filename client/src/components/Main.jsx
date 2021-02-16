import React, { useState, useEffect } from 'react';
import Home from './Home';
import Practice from './Practice';
import Contact from './Contact';

const main = (props) => {
  const [tab, setTab] = React.useState('home');
  const [module, setModule] = React.useState('selection');

  useEffect(() => {}, [tab, module])

  function navTabPractice() {
    setTab('practice');
    setModule('selection');
  }

  return (
    <div style={appContainer}>
      <div style={navContainer}>
        <div style={navTitleContainer}>
          <div onClick={() => { setTab('home')}}>EYE BROWSER</div>
        </div>
        <div style={navSelectionContainer}>
          <div onClick={() => { setTab('home')}} style={navSelectionText}>HOME</div>
          <div onClick={navTabPractice} style={navSelectionText}>PRACTICE</div>
          <div onClick={() => { setTab('contact')}} style={navSelectionText}>CONTACT</div>
        </div>
      </div>
      <div style={contentContainer}>
        { tab === 'home' &&
          <Home setTab={setTab}></Home>
        }
        { tab === 'practice' &&
          <Practice module={module} setModule={setModule} getKeyboardRecords={props.getKeyboardRecords} addKeyboardRec={props.addKeyboardRec} keyboardTableData={props.keyboardTableData} getTargetRecords={props.getTargetRecords} addTargetRec={props.addTargetRec} targetTableData={props.targetTableData}></Practice>
        }
        { tab === 'contact' &&
          <Contact></Contact>
        }
      </div>
    </div>
  )
}

export default main;

const appContainer = {
  display: 'grid',
  gridTemplateRows: '1fr 19fr',
  height: '100vh',
  width: '100vw',
  fontFamily: 'Roboto',
  color: '#fff',
  fontWeight: 'bold'
}
const navContainer = {
  backgroundColor: '#fff',
  display: 'grid',
  gridTemplateColumns: '1fr  1fr',
  fontSize: 'clamp(15px, 1.5vw, 50px)',
  width: '100vw',
  height: 'clamp(40px,5vh, 50px)',
  fontWeight: 'bold'
}
const navTitleContainer = {
  display: 'flex',
  color: '#245478',
  justifySelf: 'start',
  paddingLeft: '20px',
  alignSelf: 'center',
}
const navSelectionContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifySelf: 'end',
  paddingRight: '20px',
  alignSelf: 'center',
  color: '#767676',
}
const navSelectionText = {
  margin: '0px 10px'
}
const contentContainer = {
  backgroundColor: '#245478',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}