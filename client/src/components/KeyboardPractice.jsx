import React from 'react';

class KeyboardPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPhrase: 'Try Typing',
      practiceWord: 'LazyEye Rocks',
    }
  }

  genNewPracticeWord () {
    const newWord = faker.commerce.department();
  }

  render () {
    return (
      <div>
        <button onClick={() => {this.props.setPage('Home')}}>Home</button>
        <form>
          <label>
            <div>{this.state.startPhrase} <b>{this.state.practiceWord}</b>:</div>
            <div>Select Enter When Complete</div>
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Enter'></input>
        </form>
      </div>
    )
  }
}

export default KeyboardPractice;