import React, { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
import back from '../images/back.png';
import KeyboardLeaderboard from './KeyboardLeaderboard';
import faker from 'faker';


const keyboardPractice = (props) => {
  const [startPhrase, setStartPhrase] = React.useState('Try Typing');
  const [practiceWord, setPracticeWord] = React.useState('Eye 2');
  const [inputValue, setInputValue] = React.useState('');
  const [correct, setCorrect] = React.useState('');
  const [streak, setStreak] = React.useState(0);
  const [entryResponse, setEntryResponse] = React.useState('Testing');
  const [entryResponseColor, setEntryResponseColor] = React.useState('green');
  const [caps, setCaps] = React.useState(false);
  const [nums, setNums] = React.useState(false);
  const [keyboardOn, setKeyboardOn] = React.useState(true);

  useEffect(() => { }, [inputValue, keyboardOn, caps, nums, entryResponse, entryResponseColor, streak, correct, startPhrase, practiceWord])

  function keyPress(key) {
    if (key === 'backspace') {
      if (inputValue !== '') {
        const edit = inputValue.slice(0, inputValue.length - 1);
        setInputValue(edit)
      }
    } else if (key === 'exitKeyboard') {
      setKeyboardOn(!keyboardOn);
    } else if (key === 'capsLock') {
      setCaps(!caps);
    } else if (key === '123' || key === 'abc') {
      setNums(!nums)
    } else if (key === 'spacebar') {
      const edit = inputValue + ' ';
      setInputValue(edit);
    } else {
      const edit = inputValue + key;
      setInputValue(edit);
    }
  }

  function genNewPracticeWord() {
    const newWord = faker.commerce.department();
    const newNum = Math.floor(Math.random() * 9);
    const newPhrase = `${newWord} ${newNum}`;
    setStartPhrase('Now Try');
    setPracticeWord(newPhrase);
  }

  function checkWord() {
    if (practiceWord === inputValue) {
      genNewPracticeWord();
      setInputValue('');
      setCorrect(true);
      setStreak(streak + 1);
      setEntryResponse('Correct!');
      setEntryResponseColor('green');
    } else {
      props.addKeyboardRec(streak);
      props.getKeyboardRecords();
      setCorrect(false);
      setStreak(0);
      setEntryResponse('Try again!');
      setEntryResponseColor('red');
    }
  }

  return (
    <div style={keyboardPracticeContainer} >
      <div>
        <button style={backButtonStyle} onClick={() => { props.setModule('selection') }}><img style={backImgStyle} src={back} /></button>
      </div>
      <div style={containerStyle}>
        <div style={nonKeyboardStyle}>
          <div style={keyboardHeading}>
            <div style={{ marginRight: '1vw' }} >
              {startPhrase}:
            </div>
            <div style={{ color: '#C8E1F9' }}>
              {practiceWord}
            </div>
          </div>
          <div style={inputDivStyle}>
            <input style={inputStyle} placeholder='Press enter when complete' value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} onClick={() => { setKeyboardOn(true) }} />
            <button style={enterButtonStyle} onClick={checkWord}>Enter</button>
          </div>
          <div style={streakAndResponse}>
            <div style={{ color: entryResponseColor }} >
              {entryResponse}
            </div>
            <div style={{ marginLeft: '0.5vw'}}>
              Current Streak: {streak}
            </div>
          </div>
        </div>
        <div>
          <Keyboard keyPress={keyPress} caps={caps} nums={nums} keyboardOn={keyboardOn} ></Keyboard>
        </div >
      </div>
      <div style={keyboardLeaderboard}>
        <KeyboardLeaderboard tableData={props.keyboardTableData}></KeyboardLeaderboard>
      </div>
    </div>
  )
}

export default keyboardPractice;

const keyboardLeaderboard = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px'
}
const keyboardPracticeContainer = {
  display: 'grid',
  gridTemplateColumns: '1fr 7fr 3fr',
  height: '95vh',
  width: '100vw',
}
const streakAndResponse = {
  fontSize: 'clamp(1vw, 0.75vw + 1.25vh, 4vw)',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1vh'
}
const nonKeyboardStyle = {
  marginLeft: '1vw'
}
const inputDivStyle = {
  textAlign: 'center'
}
const keyboardHeading = {
  display: 'flex',
  fontSize: 'clamp(2vw, 5vw, 6vw)',
  marginRight: '1vw',
  marginBottom: '1vh'
}
const enterButtonStyle = {
  padding: '1vw',
  fontSize: 'clamp(1vw, 1vw + 1.5vh, 4vw)',
  borderRadius: '4px',
  backgroundColor: '#dcdcdc'
}
const inputStyle = {
  textAlign: 'center',
  marginRight: '1vw',
  padding: '1vw',
  fontSize: 'clamp(1vw, 1vw + 1.5vh, 4vw)',
  borderRadius: '4px',
  width: '35vw'
}
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const backButtonStyle = {
  padding: '1vw',
  margin: '1vw',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9'
}
const backImgStyle = {
  width: 'clamp(1vw, 2vw + 3vh, 6vw)',
  height: 'clamp(1vw, 1.5vw + 3vh, 6vw)'
}
