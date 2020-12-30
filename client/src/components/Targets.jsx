import React from 'react';

class Targets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: true,
      t2: true,
      t3: true,
      t4: true,
      t5: true
    }
    this.toggleTarget = this.toggleTarget.bind(this);
  }

  toggleTarget (target) {
    this.setState({
      [target]: false
    })
  }

  render () {
    if (this.props.ready) {
      return (
        <div>
          {this.state.t1 &&
          <button name='t1' style={{'backgroundColor': 'white', 'border': 'none'}}  onClick={() => {this.toggleTarget('t1')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {this.state.t2 &&
          <button name='t2' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {this.toggleTarget('t2')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {this.state.t3 &&
          <button name='t3' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {this.toggleTarget('t3')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {this.state.t4 &&
          <button name='t4' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {this.toggleTarget('t4')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          {this.state.t5 &&
          <button name='t5' style={{'backgroundColor': 'white', 'border': 'none'}} onClick={() => {this.toggleTarget('t5')}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Targets;