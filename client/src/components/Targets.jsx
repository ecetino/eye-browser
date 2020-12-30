import React from 'react';

const targets = (props) => {
  if (props.ready) {
    return (
      <div>
        {!props.completed &&
        <div>
          <button onClick={props.reset}>restart</button>
          <div>{props.time} secs</div>
        </div>
        }
        <div>
          {props.t1 &&
          <button name='t1' style={{'backgroundColor': 'white', 'border': 'none'}}  onClick={() => {props.toggleTarget('t1')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {props.t2 &&
          <button name='t2' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {props.toggleTarget('t2')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {props.t3 &&
          <button name='t3' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {props.toggleTarget('t3')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {props.t4 &&
          <button name='t4' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {props.toggleTarget('t4')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {props.t5 &&
          <button name='t5' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {props.toggleTarget('t5')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
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

export default targets;