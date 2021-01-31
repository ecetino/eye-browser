import React from 'react';
import Keyboard from './Keyboard';
import home from '../images/home.png';
import Leaderboard from './Leaderboard';
import targetTableData from './sampleData/sampleTargetTableData'

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
      entryResponseColor: 'green',
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
    } else if (key === 'exitKeyboard') {
      this.setState({
        keyboardOn: !this.state.keyboardOn
      })
    } else if (key === 'capsLock') {
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
        entryResponse: 'Correct!',
        entryResponseColor: 'green',
      })
    } else {
      this.setState({
        correct: false,
        streak: 0,
        entryResponse: 'Try again!',
        entryResponseColor: 'red',
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
      <div className='container-fluid' >
        <div className='row'>
          <div>
            <button style={homeButtonStyle} type='button' className='btn btn-secondary' onClick={() => { this.props.setPage('Home') }}><img style={homeImgStyle} src={home} /></button>
          </div>
        </div>
        <div className='row' align='center'>
          <div className='col-9' >
            <div className='text-center' style={containerStyle}>
              <div style={nonKeyboardStyle}>
                <label>
                  <div style={startPhrase} className='display-1'>{this.state.startPhrase}: <b style={practiceWord}>{this.state.practiceWord}</b></div>
                  <div style={inputDivStyle}>
                    <input style={inputStyle} className='form-control' placeholder='Press enter when complete' type='text' value={this.state.currentInputValue} onChange={this.handleChange} onClick={this.toggleKeyboardOn} />
                    <input style={enterButtonStyle} type='button' className='btn btn-secondary' value='Enter' onClick={this.checkWord}></input>
                  </div>
                </label>
                <div>
                  <div className='h2 text-center d-inline' style={{ color: this.state.entryResponseColor }} >{this.state.entryResponse}</div>
                  <div className='h2 text-center d-inline ml-3' >Current Streak: {this.state.streak}</div>
                </div>
              </div>
              <div>
                <Keyboard keyPress={this.keyPress} caps={this.state.caps} nums={this.state.nums} keyboardOn={this.state.keyboardOn} ></Keyboard>
              </div >
            </div>
          </div>
          <div className='col'>
            <Leaderboard streak={true} measure='Best Streak' tableData={this.props.keyboardTableData}></Leaderboard>
          </div>
        </div>
      </div>
    )
  }
}

const nonKeyboardStyle = {
  marginBottom: '20px',
  minWidth: '900px'
}
const inputDivStyle = {
  width: '900px'
}
const startPhrase = {
  textAlign: 'center'
}
const practiceWord = {
  color: '#a8dadc'
}
const enterButtonStyle = {
  display: 'inline-block',
  padding: '6px 10px',
  fontSize: '40px',
  marginBottom: '18px',
}
const inputStyle = {
  textAlign: 'center',
  margin: '20px 20px',
  padding: '30px 30px',
  fontSize: '35px',
  display: 'inline-block',
  maxWidth: '480px'
}
const containerStyle = {
  align: 'center'
}
const homeButtonStyle = {
  textAlign: 'left',
  padding: '20px',
  margin: '20px',
}
const homeImgStyle = {
  width: '60px',
  height: '60px'
}

export default KeyboardPractice;