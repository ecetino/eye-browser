import React from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Welcome to Lazy Eye Trainer</h1>
        <h4>Please select a training module</h4>
        <button onClick={this.props.setPage.bind(this, 'BrowserPractice')}>Browser Practice</button>
        <button onClick={() => {this.props.setPage('KeyboardPractice')}}>Keyboard Practice</button>
        <button onClick={() => {this.props.setPage('TargetPractice')}}>Target Practice</button>
      </div>
    )
  }
}

export default Home;