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
        <div className='container text-center' style={keyboardContainerStyle}>
          <div>
            {lowerCaseKeys[0].map((key) =>
              <button style={keyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            {lowerCaseKeys[1].map((key) =>
              <button style={keyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            <button style={capsLockButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('capsLock') }} key={capsLock}><img src={capsLock} style={capsLockImgStyle}></img></button>
            {lowerCaseKeys[2].map((key) =>
              <button style={keyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
            <button style={backspaceButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('backspace') }} key={backspace}><img src={backspace} style={backspaceImgStyle}></img></button>
          </div>
          <div>
            <button style={switchButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('123') }} key='123'>123</button>
            <button style={spacebarButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('spacebar') }} key={spacebar}><img src={spacebar} style={spacebarImgStyle}></img></button>
            <button style={exitKeyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('exitKeyboard') }} key={exitKeyboard}><img src={exitKeyboard} style={exitKeyboardImgStyle}></img></button>

          </div>
        </div>
      )
    } else if (props.caps === true && props.nums === false) {
      return (
        <div className='container-fluid text-center' style={keyboardContainerStyle}>
          <div>
            {upperCaseKeys[0].map((key) =>
              <button style={keyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            {upperCaseKeys[1].map((key) =>
              <button style={keyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
          </div>
          <div>
            <button style={capsLockButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('capsLock') }} key={capsLock}><img src={capsLock} style={capsLockImgStyle}></img></button>
            {upperCaseKeys[2].map((key) =>
              <button style={keyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
            )}
            <button style={backspaceButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('backspace') }} key={backspace}><img src={backspace} style={backspaceImgStyle}></img></button>
          </div>
          <div>
            <button style={switchButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('123') }} key='123'>123</button>
            <button style={spacebarButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('spacebar') }} key={spacebar}><img src={spacebar} style={spacebarImgStyle}></img></button>
            <button style={exitKeyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('exitKeyboard') }} key={exitKeyboard}><img src={exitKeyboard} style={exitKeyboardImgStyle}></img></button>
          </div>
        </div>
      )
    } else {
      return (
        <div className='container-fluid text-center' style={numKeyboardContainerStyle}>
        <div>
          {nums[0].map((key) =>
            <button style={numKeyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
          )}
        </div>
        <div>
          {nums[1].map((key) =>
            <button style={numKeyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress(key) }} key={key}>{key}</button>
          )}
        </div>
        <div>
          <button style={numSwitchButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('abc') }} key='abc'>abc</button>
          <button style={numSpacebarButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('spacebar') }} key={spacebar}><img src={spacebar} style={spacebarImgStyle}></img></button>
          <button style={numBackspaceButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('backspace') }} key={backspace}><img src={backspace} style={backspaceImgStyle}></img></button>
          <button style={numExitKeyboardButtonStyle} type='button' className='btn btn-primary' onClick={() => { props.keyPress('exitKeyboard') }} key={exitKeyboard}><img src={exitKeyboard} style={exitKeyboardImgStyle}></img></button>
        </div>
      </div>
      )
    }
  }
};

const keyboardContainerStyle = {
  backgroundColor: 'black',
  marginTop: '20px',
  width: '900px',
  minWidth: '900px',
  padding: '20px'
}
const keyboardButtonStyle = {
  width: '70px',
  height: '70px',
  margin: '8px',
  fontSize: '40px',
  color: 'black'
}
const switchButtonStyle = {
  width: '110px',
  height: '70px',
  margin: '8px',
  fontSize: '40px',
  color: 'black'
}
const spacebarButtonStyle = {
  width: '585px',
  height: '70px',
  margin: '8px'
}
const spacebarImgStyle = {
  width: '60px',
  height: '40px',
  paddingTop: '10px',
}
const capsLockButtonStyle = {
  width: '110px',
  height: '70px',
  margin: '8px'
}
const capsLockImgStyle = {
  width: '45px',
  height: '45px',
}
const exitKeyboardButtonStyle = {
  width: '110px',
  height: '70px',
  margin: '8px',
}
const exitKeyboardImgStyle = {
  width: '45px',
  height: '45px',
  margin: '8px'
}
const backspaceButtonStyle = {
  width: '110px',
  height: '70px',
  margin: '8px'
}
const backspaceImgStyle = {
  width: '45px',
  height: '45px'
}

const numKeyboardContainerStyle = {
  backgroundColor: 'black',
  maxWidth: '740px',
  minWidth: '740px',
  padding: '20px 0px'
}
const numKeyboardButtonStyle = {
  width: '120px',
  height: '100px',
  margin: '10px',
  fontSize: '50px',
  color: 'black'
}
const numSwitchButtonStyle = {
  width: '120px',
  height: '100px',
  margin: '10px',
  fontSize: '50px',
  color: 'black'
}
const numSpacebarButtonStyle = {
  width: '260px',
  height: '100px',
  margin: '10px'
}
const numBackspaceButtonStyle = {
  width: '120px',
  height: '100px',
  margin: '10px'
}
const numExitKeyboardButtonStyle = {
  width: '120px',
  height: '100px',
  margin: '10px',
}
export default keyboard;