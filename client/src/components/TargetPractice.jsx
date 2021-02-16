import React from 'react';
import Targets from './Targets'
import back from '../images/back.png';
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
    const heights = ['2.5vw', '12.5vw', '22.5vw'];
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
    this.props.setModule('selection');
  }

  render() {
    return (
      <div style={targetPracticeContainer}>
        <div>
          <button style={backButtonStyle} onClick={this.sendHome}><img style={backImgStyle} src={back} /></button>
        </div>
        <div style={targetDisplayContainer}>
          {!this.state.ready &&
            <div style={notReadyTargetStyle}>
              <div style={sentenceTextStyle}>
                Please Click Ready To<br />Begin Target Practice <img src={target} style={sentenceTargetStyle} />
              </div>
              <div style={sentenceTextSmallStyle}>
                After you ready up, click each of the five targets as fast as you can
              </div>
              <button style={readyButtonStyle} onClick={this.setReady}>Ready</button>
            </div>
          }
          {this.state.completed &&
            <div style={readyTargetStyle}>
              <div>
                <div>
                  Nice job!
                </div>
                <div style={{ fontSize: '2vw'}}>
                  Completed in {Math.floor(this.state.time / 10)}. {this.state.time % 10} seconds
                </div>
              </div>
              <div>
                <button style={tryAgainButton} onClick={this.reset}>Try again?</button>
              </div>
            </div>
          }
          <Targets startTimer={this.startTimer} ready={this.state.ready} reset={this.reset} t1={this.state.t1} t1Height={this.state.t1Height} t2={this.state.t2} t2Height={this.state.t2Height} t3={this.state.t3} t3Height={this.state.t3Height} t4={this.state.t4} t4Height={this.state.t4Height} t5={this.state.t5} t5Height={this.state.t5Height} targetsChecked={this.state.targetsChecked} toggleTarget={this.toggleTarget} completed={this.state.completed} time={this.state.time} inProgress={this.state.inProgress}></Targets>
        </div>
        <div style={targetLeaderboard}>
          <TargetLeaderboard tableData={this.props.targetTableData}></TargetLeaderboard>
        </div>
      </div>
    )
  }
}

const targetLeaderboard = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  borderRadius: '4px'
}
const targetPracticeContainer = {
  display: 'grid',
  gridTemplateColumns: '1fr 7fr 3fr',
  height: '95vh',
  width: '100vw',
}
const targetDisplayContainer = {
  width: '68vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const tryAgainButton = {
  marginTop: '2vh',
  fontSize: '2vw',
  color: '#fff',
  textShadow: '0px 1px 1px #404040',
  backgroundColor: '#E2474B',
  borderRadius: '4px',
  padding: '1vw'
}
const readyTargetStyle = {
  fontSize: '4.5vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
}
const sentenceTextStyle = {
  fontSize: '5.5vw',
}
const sentenceTextSmallStyle = {
  fontSize: '1.2vw',
  color: '#C8E1F9',
  textAlign: 'center',
  marginRight: '3vw'
}
const sentenceTargetStyle = {
  width: '5vw',
  paddingBottom: '3vh'
}
const notReadyTargetStyle = {
  textShadow: '0px 1px 1px #404040',
  display: 'flex',
  flexDirection: 'column',
}
const readyButtonStyle = {
  marginTop: '2vh',
  padding: '1vw',
  fontSize: '2.5vw',
  color: 'white',
  textShadow: '0px 1px 1px #404040',
  backgroundColor: '#E2474B',
  borderRadius: '4px',
  alignSelf: 'center',
  marginRight: '3vw'
}
const backButtonStyle = {
  padding: '1vw',
  margin: '1vw',
  borderRadius: '4px',
  backgroundColor: '#C8E1F9'
}
const backImgStyle = {
  width: 'clamp(1vw, 2vw + 3vh, 6vw)',
  height: 'clamp(1vw, 1.5vw + 3vh, 6vw)'
}
export default TargetPractice; ``