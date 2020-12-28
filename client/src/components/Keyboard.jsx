import React from 'react';

const keyboard = (props) => {
  const lowerCaseKeys = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'],['caps','z','x','c','v','b','n','m','backspace'],['123','spacebar','exit keyboard']];
  const upperCaseKeys = [['Q','W','E','R','T','Y','U','I','O','P'], ['A','S','D','F','G','H','J','K','L'],['caps','Z','X','C','V','B','N','M','backspace'],['123','spacebar','exit keyboard']];
  const nums = [['1', '2', '3', '4', '5'], ['6','7','8','9', '0'], ['abc','spacebar', 'backspace','exit keyboard']]

  if (props.keyboardOn === false) {
    return (
      <div></div>
    )
  } else {
    if (props.caps === false && props.nums === false) {
      return (
        <div>
          {lowerCaseKeys.map((keyRow) =>
            <div>
            {keyRow.map((key) =>
              <button onClick={() => {props.keyPress(key)}}>{key}</button>
            )}
            </div>
          )}
        </div>
      )
    } else if (props.caps === true && props.nums === false) {
        return (
          <div>
            {upperCaseKeys.map((keyRow) =>
              <div>
              {keyRow.map((key) =>
                <button onClick={() => {props.keyPress(key)}}>{key}</button>
              )}
              </div>
            )}
          </div>
        )
    } else {
        return (
          <div>
            {nums.map((keyRow) =>
              <div>
              {keyRow.map((key) =>
                <button onClick={() => {props.keyPress(key)}}>{key}</button>
              )}
              </div>
            )}
          </div>
        )
    }
  }

};

export default keyboard;