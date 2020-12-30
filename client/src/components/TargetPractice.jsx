import React from 'react';
import Targets from './Targets'

class TargetPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      completed: false,
      t1: true,
      t2: true,
      t3: true,
      t4: true,
      t5: true,
      targetsChecked: 0,
      time: 0,
    }
    this.setReady = this.setReady.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleTarget = this.toggleTarget.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  setReady () {
    this.setState({
      ready: !this.state.ready
    })
    this.startTimer();
  }

  startTimer () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  stopTimer () {
    clearInterval(this.timer);
  }

  setCompleted () {
    this.setState({
      completed: !this.state.completed
    })
  }

  reset () {
    this.setState({
      t1: true,
      t2: true,
      t3: true,
      t4: true,
      t5: true,
      targetsChecked: 0,
      completed: false,
      time: 0
    })
    this.stopTimer();
    this.startTimer();
  }

  toggleTarget (target) {
    this.setState({
    [target]: false,
    targetsChecked: this.state.targetsChecked + 1
    })
    if (this.state.targetsChecked === 4) {
      this.setCompleted();
      this.stopTimer();
    }
  }

  render () {
    return (
      <div>
        <button onClick={() => {this.props.setPage('Home')}}>Home</button>
        <div>Please click ready to begin target practice</div>
        {!this.state.ready &&
        <button onClick={this.setReady}>Ready</button>
        }
        {this.state.completed &&
        <div>
          <h2>Nice job! Completed in {this.state.time} seconds</h2>
          <button onClick={this.reset}>Try again?</button>
        </div>
        }
        <Targets startTimer={this.startTimer} ready={this.state.ready} reset={this.reset} t1={this.state.t1} t2={this.state.t2} t3={this.state.t3} t4={this.state.t4} t5={this.state.t5} targetsChecked={this.state.targetsChecked} toggleTarget={this.toggleTarget} completed={this.state.completed} time={this.state.time}></Targets>
      </div>
    )
  }
}

export default TargetPractice;