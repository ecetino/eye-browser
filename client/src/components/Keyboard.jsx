import React from 'react';
import backspace from '../images/backspace.png';
import capsLock from '../images/capslock.png';
import exitKeyboard from '../images/exitkeyboard.png';
import spacebar from '../images/bracket.png';

const keyboard = (props) => {
  const lowerCaseKeys = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
  const upperCaseKeys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M']];
  const nums = [['1', '2', '3', '4', '5'], ['6', '7', '8', '9', '0']];

  if (props.keyboardOn === false) {
    return (
      <div></div>
    )
  } else {
    if (props.caps === false && props.nums === false) {
      return (
        <div style={keyboardContainerStyle}>
          <div>
            {lowerCaseKeys[0].map((key) =>
              <button style={keyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            {lowerCaseKeys[1].map((key) =>
              <button style={keyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            <button style={capsLockButtonStyle} onClick={() => { props.keyPress('capsLock') }} key={capsLock}><img src={capsLock} style={capsLockImgStyle}></img></button>
            {lowerCaseKeys[2].map((key) =>
              <button style={keyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
            <button style={backspaceButtonStyle} onClick={() => { props.keyPress('backspace') }} key={backspace}><img src={backspace} style={backspaceImgStyle}></img></button>
          </div>
          <div>
            <button style={switchButtonStyle} onClick={() => { props.keyPress('123') }} key='123'>123</button>
            <button style={spacebarButtonStyle} onClick={() => { props.keyPress('spacebar') }} key={spacebar}><img src={spacebar} style={spacebarImgStyle}></img></button>
            <button style={exitKeyboardButtonStyle} onClick={() => { props.keyPress('exitKeyboard') }} key={exitKeyboard}><img src={exitKeyboard} style={exitKeyboardImgStyle}></img></button>
          </div>
        </div>
      )
    } else if (props.caps === true && props.nums === false) {
      return (
        <div style={keyboardContainerStyle}>
          <div>
            {upperCaseKeys[0].map((key) =>
              <button style={keyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            {upperCaseKeys[1].map((key) =>
              <button style={keyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            <button style={capsLockButtonStyle} onClick={() => { props.keyPress('capsLock') }} key={capsLock}><img src={capsLock} style={capsLockImgStyle}></img></button>
            {upperCaseKeys[2].map((key) =>
              <button style={keyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
            <button style={backspaceButtonStyle} onClick={() => { props.keyPress('backspace') }} key={backspace}><img src={backspace} style={backspaceImgStyle}></img></button>
          </div>
          <div>
            <button style={switchButtonStyle} onClick={() => { props.keyPress('123') }} key='123'>123</button>
            <button style={spacebarButtonStyle} onClick={() => { props.keyPress('spacebar') }} key={spacebar}><img src={spacebar} style={spacebarImgStyle}></img></button>
            <button style={exitKeyboardButtonStyle} onClick={() => { props.keyPress('exitKeyboard') }} key={exitKeyboard}><img src={exitKeyboard} style={exitKeyboardImgStyle}></img></button>
          </div>
        </div>
      )
    } else {
      return (
        <div style={numKeyboardContainerStyle}>
        <div>
          {nums[0].map((key) =>
            <button style={numKeyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
          )}
        </div>
        <div>
          {nums[1].map((key) =>
            <button style={numKeyboardButtonStyle} onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
          )}
        </div>
        <div>
          <button style={numSwitchButtonStyle} onClick={() => { props.keyPress('abc') }} key='abc'>abc</button>
          <button style={numSpacebarButtonStyle} onClick={() => { props.keyPress('spacebar') }} key={spacebar}><img src={spacebar} style={spacebarImgStyle}></img></button>
          <button style={numBackspaceButtonStyle} onClick={() => { props.keyPress('backspace') }} key={backspace}><img src={backspace} style={backspaceImgStyle}></img></button>
          <button style={numExitKeyboardButtonStyle} onClick={() => { props.keyPress('exitKeyboard') }} key={exitKeyboard}><img src={exitKeyboard} style={exitKeyboardImgStyle}></img></button>
        </div>
      </div>
      )
    }
  }
};

const keyboardContainerStyle = {
  backgroundColor: '#fff',
  marginTop: '1vh',
  width: '68vw',
  padding: '1vw',
  borderRadius: '4px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}
const keyboardButtonStyle = {
  width: 'clamp(1vw, 6vw, 8vw)',
  height: 'clamp(1vw, 6vw, 8vw)',
  margin: '0.3vw',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  color: 'black',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const switchButtonStyle = {
  width: 'clamp(1vw, 9.25vw, 15vw)',
  height: 'clamp(1vw, 6vw, 8vw)',
  margin: '0.3vw',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  color: 'black',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const spacebarButtonStyle = {
  width: 'clamp(30vw, 45.6vw, 70vw)',
  height: 'clamp(1vw, 6vw, 8vw)',
  margin: '0.3vw',
  borderRadius: '4px',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const spacebarImgStyle = {
  width: 'clamp(1vw, 5vw, 6vw)',
  height: 'clamp(1vw, 3vw, 6vw)',
  paddingTop: '0.8vh',
  borderRadius: '4px'
}
const capsLockButtonStyle = {
  width: 'clamp(1vw, 9.25vw, 15vw)',
  height: 'clamp(1vw, 6vw, 8vw)',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  margin: '0.3vw',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const capsLockImgStyle = {
  width: 'clamp(1vw, 3vw, 6vw)',
  height: 'clamp(1vw, 3vw, 6vw)',
}
const exitKeyboardButtonStyle = {
  width: 'clamp(1vw, 9.25vw, 15vw)',
  height: 'clamp(1vw, 6vw, 8vw)',
  margin: '0.3vw',
  borderRadius: '4px',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const exitKeyboardImgStyle = {
  width: 'clamp(1vw, 3vw, 6vw)',
  height: 'clamp(1vw, 3vw, 6vw)',
}
const backspaceButtonStyle = {
  width: 'clamp(1vw, 9.25vw, 15vw)',
  height: 'clamp(1vw, 6vw, 8vw)',
  margin: '0.3vw',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  borderRadius: '4px',
  justifySelf: 'center',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const backspaceImgStyle = {
  width: 'clamp(1vw, 3vw, 6vw)',
  height: 'clamp(1vw, 3vw, 6vw)',
}

const numKeyboardContainerStyle = {
  backgroundColor: '#fff',
  padding: '1vw',
  borderRadius: '4px',
  marginTop: '1vh'
}

const numKeyboardButtonStyle = {
  width: 'clamp(1vw, 7vw, 8vw)',
  height: 'clamp(1vw, 7vw, 8vw)',
  margin: '0.5vw',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  color: 'black',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const numSwitchButtonStyle = {
  width: 'clamp(1vw, 7vw, 8vw)',
  height: 'clamp(1vw, 7vw, 8vw)',
  margin: '0.5vw',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
  color: 'black',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)'
}
const numSpacebarButtonStyle = {
  width: 'clamp(1vw, 15vw, 15vw)',
  height: 'clamp(1vw, 7vw, 8vw)',
  margin: '0.5vw',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
}
const numBackspaceButtonStyle = {
  width: 'clamp(1vw, 7vw, 8vw)',
  height: 'clamp(1vw, 7vw, 8vw)',
  margin: '0.5vw',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
}
const numExitKeyboardButtonStyle = {
  width: 'clamp(1vw, 7vw, 8vw)',
  height: 'clamp(1vw, 7vw, 8vw)',
  margin: '0.5vw',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9',
  borderColor: 'rgb(200 225 249 / 0%)',
  fontSize: 'clamp(1vw, 3vw, 6vw)',
}
export default keyboard;