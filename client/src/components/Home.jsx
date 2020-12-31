import React from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  setLoggedIn () {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render () {
    return (
      <div style={{'backgroundColor': 'grey'}}>
        <h1>Welcome to Lazy Eye Trainer</h1>
        {!this.state.loggedIn &&
        <Login setLoggedIn={this.setLoggedIn}></Login>
        }
        {this.state.loggedIn &&
        <div>
          <h4>Please select a training module</h4>
          <button onClick={this.props.setPage.bind(this, 'BrowserPractice')}>Browser Practice</button>
          <button onClick={() => {this.props.setPage('KeyboardPractice')}}>Keyboard Practice</button>
          <button onClick={() => {this.props.setPage('TargetPractice')}}>Target Practice</button>
        </div>
        }
      </div>
    )
  }
}

export default Home;