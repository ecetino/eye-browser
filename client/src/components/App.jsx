import React from 'react';
import Home from './Home';
import BrowserPractice from './BrowserPractice';
import KeyboardPractice from './KeyboardPractice';
import TargetPractice from './TargetPractice';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
    }
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount () {
    this.setState({
      currentPage: 'Home',
    })
  }

  setPage(page) {
    this.setState ({
      currentPage: page,
    })
  }

  render() {
    if (this.state.currentPage === 'BrowserPractice') {
      return <BrowserPractice setPage={this.setPage}></BrowserPractice>
    } else if (this.state.currentPage === 'KeyboardPractice') {
      return <KeyboardPractice setPage={this.setPage}></KeyboardPractice>
    } else if (this.state.currentPage === 'TargetPractice') {
      return <TargetPractice setPage={this.setPage}></TargetPractice>
    } else {
      return <Home setPage={this.setPage}></Home>
    }
  }
}

export default App;