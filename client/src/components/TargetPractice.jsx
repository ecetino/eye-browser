import React from 'react';
import Targets from './Targets'
import home from '../images/home.png';
import target from '../images/target.png';
import TargetLeaderboard from './TargetLeaderboard';

class TargetPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      completed: false,
      t1: true,
      t1Height: '',
      t2: true,
      t2Height: '',
      t3: true,
      t3Height: '',
      t4: true,
      t4Height: '',
      t5: true,
      t5Height: '',
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
    this.setRandPos = this.setRandPos.bind(this);
    this.sendHome = this.sendHome.bind(this);
  }

  componentDidMount() {
    this.setRandPos();
  }

  setRandPos() {
    const heights = ['10px', '210px', '410px'];
    this.setState({
      t1Height: heights[Math.floor(Math.random() * 3)],
      t2Height: heights[Math.floor(Math.random() * 3)],
      t3Height: heights[Math.floor(Math.random() * 3)],
      t4Height: heights[Math.floor(Math.random() * 3)],
      t5Height: heights[Math.floor(Math.random() * 3)]
    })
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
    }, 100)
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  setCompleted() {
    this.props.addTargetRec(this.state.time);
    this.props.getTargetRecords();
    this.setRandPos();
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

  sendHome() {
    this.stopTimer();
    this.props.setPage('Home');
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row' align='center'>
          <div className='col-1'>
            <button style={homeButtonStyle} type='button' className='btn btn-secondary' onClick={this.sendHome}><img style={homeImgStyle} src={home} /></button>
          </div>
          <div className='col-10' style={targetDisplayContainer}>
            {!this.state.ready &&
              <div style={notReadyTargetStyle}>
                <div className='display-2'>Please Click Ready To<br />  Begin Target Practice <img src={target} style={sentenceTargetStyle} /></div>
                <div className='h4 text-secondary'>After you ready up, click each of the five targets as fast as you can</div>
                <button type='button' className='btn btn-primary' style={readyButtonStyle} onClick={this.setReady}>Ready</button>
              </div>
            }
            {this.state.completed &&
              <div style={readyTargetStyle}>
                <div className='display-1'>Nice job!<br /><h2>Completed in {Math.floor(this.state.time / 10)}. {this.state.time % 10} seconds</h2> </div>
                <button style={tryAgainButton} type='button' className='btn btn-primary' onClick={this.reset}>Try again?</button>
              </div>
            }
            <Targets startTimer={this.startTimer} ready={this.state.ready} reset={this.reset} t1={this.state.t1} t1Height={this.state.t1Height} t2={this.state.t2} t2Height={this.state.t2Height} t3={this.state.t3} t3Height={this.state.t3Height} t4={this.state.t4} t4Height={this.state.t4Height} t5={this.state.t5} t5Height={this.state.t5Height} targetsChecked={this.state.targetsChecked} toggleTarget={this.toggleTarget} completed={this.state.completed} time={this.state.time} inProgress={this.state.inProgress}></Targets>
          </div>
          <div className='col'>
            <TargetLeaderboard time={true} measure='Time' tableData={this.props.targetTableData}></TargetLeaderboard>
          </div>
        </div>
      </div>
    )
  }
}

const targetDisplayContainer = {
  maxWidth: '920px',
  minWidth: '920px',
  height: '600px'
}


const tryAgainButton = {
  marginTop: '30px',
  width: '270px',
  height: '100px',
  fontSize: '40px',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
const readyTargetStyle = {
  position: 'absolute',
  top: '200px',
  left: '35%'
}
const sentenceTargetStyle = {
  width: '100px',
  marginBottom: '20px'
}
const notReadyTargetStyle = {
  position: 'relative',
  top: '200px',
  textShadow: '0px 1px 1px #404040'
}
const homeButtonStyle = {
  position: 'fixed',
  left: '15px',
  padding: '20px',
  fontSize: '40px',
  marginTop: '10px',
  width: '100px'
}
const homeImgStyle = {
  width: '60px',
  height: '60px'
}
const readyButtonStyle = {
  marginTop: '30px',
  width: '150px',
  height: '100px',
  fontSize: '40px',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
export default TargetPractice; ``