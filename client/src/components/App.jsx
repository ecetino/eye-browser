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
      user: 'none',
      keyboardRecordsArr: [],
      targetRecordsArr: [],
      browserRecordsArr: [],
      loggedIn: false
    }
    this.setPage = this.setPage.bind(this);
    this.getKeyboardRecords = this.getKeyboardRecords.bind(this);
    this.getTargetRecords = this.getTargetRecords.bind(this);
    this.getBrowserRecords = this.getBrowserRecords.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  componentDidMount () {
   this.setPage('Home');
   this.getKeyboardRecords();
   this.getTargetRecords();
   this.getBrowserRecords();
  }

  setPage(page) {
    this.setState ({
      currentPage: page,
    })
  }

  setLoggedIn () {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  async getKeyboardRecords() {
    try {
      const recs = await Axios.get('/keyboardRecs');
      console.log(recs.data)
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

  render() {
    if (this.state.currentPage === 'BrowserPractice') {
      return <BrowserPractice browserTableData={this.state.browserRecordsArr} setPage={this.setPage}></BrowserPractice>
    } else if (this.state.currentPage === 'KeyboardPractice') {
      return <KeyboardPractice keyboardTableData={this.state.keyboardRecordsArr} setPage={this.setPage}></KeyboardPractice>
    } else if (this.state.currentPage === 'TargetPractice') {
      return <TargetPractice targetTableData={this.state.targetRecordsArr} setPage={this.setPage}></TargetPractice>
    } else {
      return <Home loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} user={this.state.user} setPage={this.setPage}></Home>
    }
  }
}

export default App;