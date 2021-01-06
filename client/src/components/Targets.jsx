import React from 'react';
import target from '../images/target.png';

const targets = (props) => {
  if (props.inProgress) {
    return (
      <div className='d-block'>
        {!props.completed &&
          <div style={aboveTargetsStyle}>
            <button type='button' className='btn btn-primary' style={restartButtonStyle} onClick={props.reset}>Restart</button>
            <div style={timeStyle}>{Math.floor(props.time/10)}. {props.time%10} secs</div>
          </div>
        }
        <div className='container-fluid' style={targetContainerStyle}>
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

const timeStyle = {
  position: 'absolute',
  top: '25px',
  left: '70%',
  fontSize: '50px',
  width: '300px'
}
const aboveTargetsStyle = {
  position: 'absolute',
  left: '20%',
  paddingTop: '10px',
  width: '500px'
}
const restartButtonStyle = {
  position: 'relative',
  right: '10%',
  top: '10px',
  width: '240px',
  height: '100px',
  fontSize: '40px',
  color: 'white',
  textShadow: '0px 1px 1px #404040'
}
const targetContainerStyle = {
  border: 'solid',
  position: 'absolute',
  top: '200px',
  left: '10%',
  backgroundColor: '#cdcbcb',
  borderColor: 'black',
  width: '825px',
  height: '575px',
  padding: '100px 5px'
}
const target1Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  left: '5px',
  right: '0px'
}
const target2Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  left: '170px',
  right: '00px'
}
const target3Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  left: '330px',
  right: '0px'
}
const target4Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  left: '490px',
  right: '0px'
}
const target5Style = {
  backgroundColor: '#cdcbcb',
  border: 'none',
  position: 'absolute',
  left: '650px',
  right: '0px'
}
const targetImgStyle = {
  height: '150px'
}

export default targets;