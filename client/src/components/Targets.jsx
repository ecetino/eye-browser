import React from 'react';
import target from '../images/target.png';

const targets = (props) => {
  if (props.inProgress) {
    return (
      <div style={targetsMainContainer}>
        {!props.completed &&
          <div style={aboveTargetsStyle}>
            <button style={restartButtonStyle} onClick={props.reset}>Restart</button>
            <div style={timeStyle}>{Math.floor(props.time/10)}. {props.time%10} secs</div>
          </div>
        }
        <div style={targetContainerStyle}>
          {props.t1 &&
            <button name='t1' style={Object.assign({top: props.t1Height},target1Style)} onClick={() => { props.toggleTarget('t1') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t2 &&
            <button name='t2' style={Object.assign({top: props.t2Height},target2Style)} onClick={() => { props.toggleTarget('t2') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t3 &&
            <button name='t3' style={Object.assign({top: props.t3Height},target3Style)} onClick={() => { props.toggleTarget('t3') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t4 &&
            <button name='t4' style={Object.assign({top: props.t4Height},target4Style)} onClick={() => { props.toggleTarget('t4') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t5 &&
            <button name='t5' style={Object.assign({top: props.t5Height},target5Style)} onClick={() => { props.toggleTarget('t5') }}><img src={target} style={targetImgStyle} /></button>
          }
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

const targetsMainContainer = {
  display: 'flex',
  flexDirection: 'column'
}

const timeStyle = {
  fontSize: '3vw',
}
const aboveTargetsStyle = {
  display: 'flex',
  alignSelf: 'center'
}
const restartButtonStyle = {
  fontSize: '2vw',
  padding: '0.5vw 1.5vw',
  color: '#000',
  borderRadius: '4px',
  backgroundColor: '#dcdcdc',
  marginRight: '1.5vw',
  alignSelf: 'center'
}
const targetContainerStyle = {
  position: 'relative',
  top: '2vh',
  backgroundColor: '#fff',
  borderRadius: '4px',
  width: '57vw',
  height: '34vw',
  padding: '2vw 1vw 2vw 2vw'
}
const target1Style = {
  backgroundColor: '#fff',
  border: 'none',
  position: 'absolute',
  left: '2vw',
}
const target2Style = {
  backgroundColor: '#fff',
  border: 'none',
  position: 'absolute',
  left: '12.5vw',
}
const target3Style = {
  backgroundColor: '#fff',
  border: 'none',
  position: 'absolute',
  left: '23vw',
}
const target4Style = {
  backgroundColor: '#fff',
  border: 'none',
  position: 'absolute',
  left: '34vw',
}
const target5Style = {
  backgroundColor: '#fff',
  border: 'none',
  position: 'absolute',
  left: '45vw',
}
const targetImgStyle = {
  height: '9.3vw'
}

export default targets;