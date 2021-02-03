import React from 'react';
import Home from './Home';
import Axios from 'axios';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';
import BrowserPractice from './BrowserPractice';
import '../style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
      user: '',
      password: '',
      loggedIn: false,
      loginFailed: false,
      keyboardRecordsArr: [],
      targetRecordsArr: [],
    }
    this.setPage = this.setPage.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setLoginInfo = this.setLoginInfo.bind(this)
    this.setLoginFailed = this.setLoginFailed.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.getKeyboardRecords = this.getKeyboardRecords.bind(this);
    this.getTargetRecords = this.getTargetRecords.bind(this);
    this.testLogin = this.testLogin.bind(this);
    this.addTargetRec = this.addTargetRec.bind(this);
    this.addKeyboardRec = this.addKeyboardRec.bind(this);
  }

  componentDidMount() {
    this.setPage('home');
    this.getKeyboardRecords();
    this.getTargetRecords();
  }

  setPage(page) {
    this.setState({
      currentPage: page,
    })
  }

  setUser(user) {
    this.setState({
      user: user,
      loggedIn: true
    })
  }

  setLoggedIn() {
    this.setState({
      loggedIn: !this.state.loggedIn,
      password: '',
      confirmPassword: ''
    })
  }

  setLoginFailed() {
    this.setState({
      loginFailed: !this.state.loginnFailed
    })
  }

  setLoginInfo(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({
      [name]: value
    })
  }

  async getKeyboardRecords() {
    try {
      const recs = await Axios.get('/keyboardRecs');
      this.setState({
        keyboardRecordsArr: recs.data
      })
    } catch (err) {
      console.error(err)
    }
  }

  async getTargetRecords() {
    try {
      const recs = await Axios.get('/targetRecs');
      this.setState({
        targetRecordsArr: recs.data
      })
    } catch (err) {
      console.error(err)
    }
  }

  async testLogin() {
    try {
      const user = this.state.user;
      const password = this.state.password;
      const result = await Axios.get(`/userAuth/${user}/?password=${password}`);
      console.log(result);
      if (result.data) {
        this.setLoggedIn();
      } else {
        this.setState({
          loginFailed: true
        })
      }
    } catch (err) {
      console.error(err);
    }
  }

  async addTargetRec (time) {
    try {
      const result = await Axios.post('/addTargetRec', {
         user: this.state.user,
         time: `${Math.floor(time/10)}.${time%10}`
        });
    } catch (err) {
      console.error(err);
    }
  }

  async addKeyboardRec (streak) {
    try {
      const result = await Axios.post('/addKeyboardRec', {
         user: this.state.user,
         streak: streak
        });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (this.state.currentPage === 'BrowserPractice') {
      return <BrowserPractice setPage={this.setPage}></BrowserPractice>
    } else if (this.state.currentPage === 'KeyboardPractice') {
      return <KeyboardPractice getKeyboardRecords={this.getKeyboardRecords} addKeyboardRec={this.addKeyboardRec} keyboardTableData={this.state.keyboardRecordsArr} setPage={this.setPage}></KeyboardPractice>
    } else if (this.state.currentPage === 'TargetPractice') {
      return <TargetPractice getTargetRecords={this.getTargetRecords} addTargetRec={this.addTargetRec} targetTableData={this.state.targetRecordsArr} setPage={this.setPage}></TargetPractice>
    } else {
      return <Home testLogin={this.testLogin} loginFailed={this.state.loginFailed} setLoginFailed={this.setLoginFailed} setLoggedIn={this.setLoggedIn} loggedIn={this.state.loggedIn} setUser={this.setUser} setLoginInfo={this.setLoginInfo} password={this.state.password} user={this.state.user} setPage={this.setPage}></Home>
    }
  }
}

export default App;