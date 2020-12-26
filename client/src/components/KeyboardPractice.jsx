import React from 'react';
import Keyboard from './Keyboard';
const faker = require('faker');

class KeyboardPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPhrase: 'Try Typing',
      practiceWord: 'lazyeye rocks',
      currentInputValue: '',
      correct: 'no entry yet',
      streak: 0,
      entryResponse: '',
    }
    this.genNewPracticeWord = this.genNewPracticeWord.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  genNewPracticeWord () {
    const newWord = faker.commerce.department().toLowerCase();
    this.setState({
      startPhrase: 'Now try',
      practiceWord: newWord,
    })
  }

  checkWord () {
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

  handleChange (event) {
    this.setState({
      currentInputValue: event.target.value,
    })
  }

  render () {
    return (
      <div>
        <button onClick={() => {this.props.setPage('Home')}}>Home</button>
        <div>
          <label>
            <div>{this.state.startPhrase} <b>{this.state.practiceWord}</b>:</div>
            <div>Select Enter When Complete</div>
            <input type='text' value={this.state.currentInputValue} onChange={this.handleChange} />
          </label>
          <input type='button' value='Enter' onClick={this.checkWord}></input>
          <div>{this.state.entryResponse}</div>
          <div>Current Streak: {this.state.streak}</div>
        </div>
        <Keyboard></Keyboard>
      </div>
    )
  }
}

export default KeyboardPractice;