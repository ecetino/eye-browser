import React from 'react';
import Targets from './Targets'
import home from '../images/home.png';
import target from '../images/target.png';

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
      inProgress: false
    }
    this.setReady = this.setReady.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleTarget = this.toggleTarget.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  setReady() {
    this.setState({
      ready: !this.state.ready,
      inProgress: !this.state.inProgress
    })
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  setCompleted() {
    this.setState({
      completed: !this.state.completed,
      inProgress: !this.state.inProgress
    })
  }

  reset() {
    this.setState({
      t1: true,
      t2: true,
      t3: true,
      t4: true,
      t5: true,
      targetsChecked: 0,
      completed: false,
      time: 0,
      inProgress: true
    })
    this.stopTimer();
    this.startTimer();
  }

  toggleTarget(target) {
    this.setState({
      [target]: false,
      targetsChecked: this.state.targetsChecked + 1
    })
    if (this.state.targetsChecked === 4) {
      this.setCompleted();
      this.stopTimer();
    }
  }

  render() {
    return (
      <div>
        <div>
          <button style={homeButtonStyle} type='button' className='btn btn-primary' onClick={() => { this.props.setPage('Home') }}><img style={homeImgStyle} src={home} /></button>
        </div>
        <div className='container-fluid text-center'>
          <div>
            {!this.state.ready &&
              <div style={notReadyTargetStyle}>
                <div className='display-1'>Please Click Ready To<br />  Begin Target Practice <img src={target} style={sentenceTargetStyle} /></div>
                <div className='h4 text-secondary'>After you ready up, click each of the five targets as fast as you can</div>
                <button type='button' className='btn btn-secondary' style={readyButtonStyle} onClick={this.setReady}>Ready</button>
              </div>
            }
            {this.state.completed &&
              <div style={readyTargetStyle}>
                <div className='display-2'>Nice job! Completed in {this.state.time} seconds</div>
                <button style={tryAgainButton} type='button' className='btn btn-primary' onClick={this.reset}>Try again?</button>
              </div>
            }
            <Targets startTimer={this.startTimer} ready={this.state.ready} reset={this.reset} t1={this.state.t1} t2={this.state.t2} t3={this.state.t3} t4={this.state.t4} t5={this.state.t5} targetsChecked={this.state.targetsChecked} toggleTarget={this.toggleTarget} completed={this.state.completed} time={this.state.time} inProgress={this.state.inProgress}></Targets>
          </div>
        </div>
      </div>
    )
  }
}

const tryAgainButton = {
  marginTop: '30px',
  width: '250px',
  height: '100px',
  fontSize: '40px',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
const readyTargetStyle = {
  paddingTop: '220px'
}
const sentenceTargetStyle = {
  width: '100px',
  marginBottom: '20px'
}
const notReadyTargetStyle = {
  paddingTop: '220px',
  textShadow: '0px 1px 1px #404040'
}
const homeButtonStyle = {
  textAlign: 'left',
  float: 'left',
  padding: '20px',
  fontSize: '40px',
  margin: '10px'
}
const homeImgStyle = {
  width: '70px',
  height: '70px'
}
const readyButtonStyle = {
  marginTop: '30px',
  width: '150px',
  height: '100px',
  fontSize: '40px',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
export default TargetPractice;``