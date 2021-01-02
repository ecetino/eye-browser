import React from 'react';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import Login from './Login';
import eye from '../images/eye.png';

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
      <div className='container-fluid text-center'>
        <img src={eye} className='img-fluid' style={eyeImageStyle}/>
        <h1 className='display-2' style={welcomeStyle}>Welcome to Lazy Eye Trainer</h1>
        {!this.state.loggedIn &&
        <Login setLoggedIn={this.setLoggedIn}></Login>
        }
        {this.state.loggedIn &&
        <div >
          <h2 style={moduleStyle}>Please select a training module</h2>
          <div >
            <button style={moduleButtonStyle} type='button' className='btn btn-primary' onClick={this.props.setPage.bind(this, 'BrowserPractice')}>Browser Practice</button>
            <button style={moduleButtonStyle} type='button' className='btn btn-secondary' onClick={() => {this.props.setPage('KeyboardPractice')}}>Keyboard Practice</button>
            <button style={moduleButtonStyle} type='button' className='btn btn-success'onClick={() => {this.props.setPage('TargetPractice')}}>Target Practice</button>
          </div>
        </div>
        }
      </div>
    )
  }
}

const welcomeStyle = {
  textShadow: '2px 2px 4px #404040',
  paddingBottom: '10px',
  fontFamily: 'Playfair Display SC'
}
const eyeImageStyle = {
  maxWidth: '60%',
  maxHeight: '60%',
  objectFit: 'cover',
  width: '700px',
  height: '320px',
  margin: '75px 25px 20px 25px'
}
const moduleStyle = {
  fontFamily: 'Playfair Display',
  textTransform: 'capitalize',
  fontSize: '40px',
  color: '#eed58a'
}
const moduleButtonStyle = {
  margin: '5px',
  fontFamily: 'Playfair Display',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
export default Home;