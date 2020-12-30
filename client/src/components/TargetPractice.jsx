import React from 'react';
import Targets from './Targets'

class TargetPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
    this.setReady = this.setReady.bind(this);
  }

  setReady () {
    this.setState({
      ready: !this.state.ready
    })
  }

  render () {
    return (
      <div>
        <button onClick={() => {this.props.setPage('Home')}}>Home</button>
        <div>Please click ready to begin target practice</div>
        <button onClick={this.setReady}>Ready</button>
        <Targets ready={this.state.ready}></Targets>
      </div>
    )
  }
}

export default TargetPractice;