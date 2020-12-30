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
  }

  render () {
    if (this.props.ready) {
      return (
        <div>
          {this.state.t1 &&
            <button style={{'backgroundColor': 'white', 'border': 'none'}} ><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          }
          <button style={{'backgroundColor': 'white', 'border': 'none'}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          <button style={{'backgroundColor': 'white', 'border': 'none'}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          <button style={{'backgroundColor': 'white', 'border': 'none'}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
          <button style={{'backgroundColor': 'white', 'border': 'none'}}><img src='https://lazy-eye-trainer.s3-us-west-1.amazonaws.com/Target.png' style={{'height': '150px'}}/></button>
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