import React from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import Login from './Login';
import eye from '../images/eye.png';

import { Button, Container } from 'react-bootstrap';

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
      <Container fluid>
        <img src={eye} style={{'height': '400px'}} />
        <h1 class='display-1'>Welcome to Lazy Eye Trainer</h1>
        {!this.state.loggedIn &&
        <Login setLoggedIn={this.setLoggedIn}></Login>
        }
        {this.state.loggedIn &&
        <div>
          <h4>Please select a training module</h4>
          <Button onClick={this.props.setPage.bind(this, 'BrowserPractice')}>Browser Practice</Button>
          <Button onClick={() => {this.props.setPage('KeyboardPractice')}}>Keyboard Practice</Button>
          <Button onClick={() => {this.props.setPage('TargetPractice')}}>Target Practice</Button>
        </div>
        }
      </Container>
    )
  }
}

export default Home;