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
      confirmPassword: '',
      confirmedPasswordFailed: false,
      loggedIn: false,
      loginFailed: false,
      keyboardRecordsArr: [],
      targetRecordsArr: [],
      browserRecordsArr: [],
    }
    this.setPage = this.setPage.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setLoginInfo = this.setLoginInfo.bind(this);
    this.setLoginFailed = this.setLoginFailed.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.getKeyboardRecords = this.getKeyboardRecords.bind(this);
    this.getTargetRecords = this.getTargetRecords.bind(this);
    this.getBrowserRecords = this.getBrowserRecords.bind(this);
    this.testLogin = this.testLogin.bind(this);
  }

  componentDidMount() {
    this.setPage('BrowserPractice');
    this.getKeyboardRecords();
    this.getTargetRecords();
    this.getBrowserRecords();
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
      loggedIn: !this.state.loggedIn
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

  confirmPassword() {
    return this.state.password === this.state.confirmPassword;
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

  async getBrowserRecords() {
    try {
      const recs = await Axios.get('/browserRecs');
      this.setState({
        browserRecordsArr: recs.data
      })
    } catch (err) {
      console.error(err)
    }
  }

  async testLogin() {
    try {
      const result = await Axios.get('/userAuth');
      console.log(result);
      if (result) {
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

  render() {
    if (this.state.currentPage === 'BrowserPractice') {
      return <BrowserPractice browserTableData={this.state.browserRecordsArr} setPage={this.setPage}></BrowserPractice>
    } else if (this.state.currentPage === 'KeyboardPractice') {
      return <KeyboardPractice keyboardTableData={this.state.keyboardRecordsArr} setPage={this.setPage}></KeyboardPractice>
    } else if (this.state.currentPage === 'TargetPractice') {
      return <TargetPractice targetTableData={this.state.targetRecordsArr} setPage={this.setPage}></TargetPractice>
    } else {
      return <Home loginFailed={this.state.loginFailed} setLoginFailed={this.setLoginFailed} setLoggedIn={this.setLoggedIn} loggedIn={this.state.loggedIn} setUser={this.setUser} setLoginInfo={this.setLoginInfo} confirmPassword={this.confirmPassword} password={this.state.password} confirmPassword={this.state.confirmPassword} user={this.state.user} setPage={this.setPage}></Home>
    }
  }
}

export default App;