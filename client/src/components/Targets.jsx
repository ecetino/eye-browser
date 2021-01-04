import React from 'react';
import target from '../images/target.png';

const targets = (props) => {
  if (props.inProgress) {
    return (
      <div className='d-block'>
        {!props.completed &&
          <div style={aboveTargetsStyle}>
            <button type='button' className='btn btn-secondary' style={restartButtonStyle} onClick={props.reset}>Restart</button>
            <div className='d-inline' style={timeStyle}>{props.time} secs</div>
          </div>
        }
        <div className='container-fluid' style={targetContainerStyle}>
          {props.t1 &&
            <button name='t1' style={target1Style} onClick={() => { props.toggleTarget('t1') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t2 &&
            <button name='t2' style={target2Style} onClick={() => { props.toggleTarget('t2') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t3 &&
            <button name='t3' style={target3Style} onClick={() => { props.toggleTarget('t3') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t4 &&
            <button name='t4' style={target4Style} onClick={() => { props.toggleTarget('t4') }}><img src={target} style={targetImgStyle} /></button>
          }
          {props.t5 &&
            <button name='t5' style={target5Style} onClick={() => { props.toggleTarget('t5') }}><img src={target} style={targetImgStyle} /></button>
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

const randomHeight = () => {
  const heights = ['10px', '210px', '410px'];
  return heights[Math.floor(Math.random() * 3)]
}
const timeStyle = {
  paddingTop: '40px',
  fontSize: '50px',
  textAlign: 'bottom'
}
const aboveTargetsStyle = {
  paddingTop: '10px',
}
const restartButtonStyle = {
  position: 'relative',
  right: '10%',
  margin: '10px -80px 30px 10px',
  width: '200px',
  height: '100px',
  fontSize: '40px',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
const targetContainerStyle = {
  border: 'solid',
  position: 'relative',
  backgroundColor: '#cdcbcb',
  borderColor: 'black',
  width: '825px',
  height: '575px',
  padding: '10px 5px'
}
const target1Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  top: randomHeight(),
  left: '5px',
  right: '0px'
}
const target2Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  top: randomHeight(),
  left: '170px',
  right: '00px'
}
const target3Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  top: randomHeight(),
  left: '330px',
  right: '0px'
}
const target4Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  top: randomHeight(),
  left: '490px',
  right: '0px'
}
const target5Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  top: randomHeight(),
  left: '650px',
  right: '0px'
}
const targetImgStyle = {
  height: '150px'
}

export default targets;