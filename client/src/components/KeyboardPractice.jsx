import React from 'react';
import Keyboard from './Keyboard';
import home from '../images/home.png';
import capslock from '../images/capslock.png';
import backspace from '../images/backspace.png';
import exitkeyboard from '../images/backspace.png';
import spacebar from '../images/backspace.png'

const faker = require('faker');

class KeyboardPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPhrase: 'Try Typing',
      practiceWord: 'lazyeye',
      currentInputValue: '',
      correct: 'no entry yet',
      streak: 0,
      entryResponse: '',
      caps: false,
      nums: false,
      keyboardOn: true
    }
    this.genNewPracticeWord = this.genNewPracticeWord.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.toggleKeyboardOn = this.toggleKeyboardOn.bind(this);
  }

  keyPress(key) {
    if (key === 'backspace') {
      if (this.state.currentInputValue !== '') {
        const edit = this.state.currentInputValue.slice(0, this.state.currentInputValue.length - 1);
        this.setState({
          currentInputValue: edit
        })
      }
    } else if (key === 'exit keyboard') {
      this.setState({
        keyboardOn: !this.state.keyboardOn
      })
    } else if (key === 'caps') {
      this.setState({
        caps: !this.state.caps
      })
    } else if (key === '123' || key === 'abc') {
      this.setState({
        nums: !this.state.nums
      })
    } else if (key === 'spacebar') {
      const edit = this.state.currentInputValue += ' ';
      this.setState({
        currentInputValue: edit
      })
    } else {
      const edit = this.state.currentInputValue += key;
      this.setState({
        currentInputValue: edit
      })
    }
  }

  toggleKeyboardOn() {
    this.setState({
      keyboardOn: true
    })
  }

  genNewPracticeWord() {
    const newWord = faker.commerce.department().toLowerCase();
    this.setState({
      startPhrase: 'Now try',
      practiceWord: newWord,
    })
  }

  checkWord() {
    if (this.state.practiceWord === this.state.currentInputValue) {
      this.genNewPracticeWord();
      this.setState({
        currentInputValue: '',
        correct: true,
        streak: this.state.streak + 1,
        entryResponse: 'Correct!'
      })
    } else {
      this.setState({
        correct: false,
        streak: 0,
        entryResponse: 'Try again!',
      })
    }
  }

  handleChange(event) {
    this.setState({
      currentInputValue: event.target.value,
    })
  }

  render() {
    return (
      <div className='container-fluid text-center' style={containerStyle}>
        <div>
          <button style={homeButtonStyle} type='button' className='btn btn-primary' onClick={() => { this.props.setPage('Home') }}><img style={homeImgStyle} src={home}/></button>
        </div>
        <div>
          <label>
          <div style={startPhrase} className='display-1'>{this.state.startPhrase}: <b style={practiceWord}>{this.state.practiceWord}</b></div>
          <div style={inputDivStyle}>
            <input style={inputStyle} className='form-control' placeholder='Press enter when complete' type='text' value={this.state.currentInputValue} onChange={this.handleChange} onClick={this.toggleKeyboardOn} />
            <input style={enterButtonStyle} type='button' className='btn btn-secondary' value='Enter' onClick={this.checkWord}></input>
          </div>
        </label>
        </div>
        <div>{this.state.entryResponse}</div>
        <div>Current Streak: {this.state.streak}</div>
        <Keyboard keyPress={this.keyPress} caps={this.state.caps} nums={this.state.nums} keyboardOn={this.state.keyboardOn} ></Keyboard>
      </div>
    )
  }
}

const inputDivStyle = {
  maxWidth: '700px'
}
const startPhrase = {
  textAlign: 'center'
}
const practiceWord = {
  color: '#ccad49'
}
const enterButtonStyle = {
  display: 'inline-block',
  padding: '6px 10px',
  fontSize: '40px',
  marginBottom: '18px',
}
const inputStyle = {
  float: 'center',
  textAlign: 'center',
  margin: '20px 20px',
  padding: '30px 30px',
  fontSize: '40px',
  display: 'inline-block',
  maxWidth: '500px'
}
const containerStyle = {
  padding: '15px'
}
const homeButtonStyle = {
  textAlign: 'left',
  float: 'left',
  padding: '20px',
  fontSize: '40px',
}
const homeImgStyle = {
  width: '70px',
  height: '70px'
}

export default KeyboardPractice;