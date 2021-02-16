import React, { useState, useEffect } from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import targetCardImg from '../images/targetCard.png';
import browserCardImg from '../images/browsing.png';
import keyboardCardImg from '../images/keyboard.png'

const practice = (props) => {
  if (props.module === 'selection') {
    return (
      <div>
        <div style={headerText}>Please Select a Practice Module</div>
        <div style={moduleCardsContainer}>
          <div style={moduleCards}>
            <div style={moduleCardTitle}>Keyboard Practice</div>
            <img style={moduleCardKeyImg} src={keyboardCardImg} />
            <p style={{ ...moduleCardParagraph, paddingTop: '1.8vh' }}>
              Practice typing on a virtual keyboard using your eyes. Try typing a randomly generated word and see how many words you can type without making an error. See how many words you can get in a row and make it to the top of the leaderboards.
          </p>
            <button onClick={() => { props.setModule('keyboard')}} style={{ ...moduleCardButton, marginTop: '3.5vh' }}>Practice</button>
          </div>
          <div style={moduleCards}>
            <div style={moduleCardTitle}>Target Practice</div>
            <img style={moduleCardTarImg} src={targetCardImg} />
            <p style={{ ...moduleCardParagraph, paddingTop: '.7vh' }}>
              Train your cursor movement accuracy by clicking between a randomly generated map of targets. Try clicking through the targets as fast as you can and see how fast you can complete the set. Check out the leaderboards and see if you can beat the top times.
        </p>
            <button onClick={() => { props.setModule('target')}} style={{ ...moduleCardButton, marginTop: '3.5vh' }}>Practice</button>
          </div>
          <div style={moduleCards}>
            <div style={moduleCardTitle}>Browser Practice</div>
            <img style={moduleCardBrowImg} src={browserCardImg} />
            <p style={moduleCardParagraph}>
              Practice browsing the web using your eyes with a simulated webpage of a fake sunglasses website I created called Looking Shady. Enjoy a preview of how this app could be used in your daily life while you browse the web.
        </p>
            <button onClick={() => { props.setModule('browser')}} style={moduleCardButton}>Practice</button>
          </div>
        </div>
      </div>
    )
  } else if (props.module === 'keyboard') {
    return (
      <KeyboardPractice setModule={props.setModule} getKeyboardRecords={props.getKeyboardRecords} addKeyboardRec={props.addKeyboardRec} keyboardTableData={props.keyboardTableData}></KeyboardPractice>
    )
  } else if (props.module === 'target') {
    return (
      <TargetPractice setModule={props.setModule} getTargetRecords={props.getTargetRecords} addTargetRec={props.addTargetRec} targetTableData={props.targetTableData}></TargetPractice>
    )
  } else {
    return (
      <BrowserPractice setModule={props.setModule} ></BrowserPractice>
    )
  }
}

export default practice;

const headerText = {
  color: '#fff',
  fontSize: 'clamp(20px, 2vw + 3vh, 4vw)',
  textAlign: 'center',
  fontWeight: '300',
  fontFamily: 'Roboto',
  marginBottom: '2vh'
}
const moduleCardsContainer = {
  display: 'flex',
  flexDirection: 'row'
}
const moduleCardTitle = {
  fontSize: 'clamp(2vh, 1vw + 2vh, 3vw)',
  fontWeight: '300',
  margin: '1vh 0vh',
  color: '#245478'
}
const moduleCardParagraph = {
  fontSize: 'clamp(1vh, 0.5vw + 1vh , 3vh)',
  margin: '1vh 1vw',
  fontWeight: '300'
}
const moduleCardButton = {
  fontSize: 'clamp(1vh, 0.75vw + 0.75vh, 2vw)',
  width: '12vw',
  alignSelf: 'center',
  padding: 'clamp(1vh, 0.5vw + 0.5vh, 1vw)',
  marginTop: 'clamp(1vw, 3vw + 3vh, 6vh)',
  color: '#fff',
  backgroundColor: '#E2474B',
  borderRadius: '4px',
  fontWeight: '300'
}
const moduleCardKeyImg = {
  width: '13vw',
  height: '23vh'
}
const moduleCardTarImg = {
  width: '20vw',
  height: '23vh',
  marginTop: '1vh'
}
const moduleCardBrowImg = {
  width: '16vw',
  height: '23vh',
  marginTop: '1.5vh'
}
const moduleCards = {
  backgroundColor: '#fff',
  height: '70vh',
  width: '20vw',
  margin: '2vh 5vh',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  color: '#000',
  alignItems: 'center'
}
