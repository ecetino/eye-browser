import React from 'react';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div>
          <button>q</button>
          <button>w</button>
          <button>e</button>
          <button>r</button>
          <button>t</button>
          <button>y</button>
          <button>u</button>
          <button>i</button>
          <button>o</button>
          <button>p</button>
        </div>
        <div>
          <button>a</button>
          <button>s</button>
          <button>d</button>
          <button>f</button>
          <button>g</button>
          <button>h</button>
          <button>j</button>
          <button>k</button>
          <button>l</button>
        </div>
        <div>
          <button>caps</button>
          <button>z</button>
          <button>x</button>
          <button>c</button>
          <button>v</button>
          <button>b</button>
          <button>n</button>
          <button>m</button>
          <button>backspace</button>
        </div>
        <div>
          <button>nums</button>
          <button>spacebar</button>
          <button>exit keyboard</button>
        </div>
      </div>
    )
  }
}

export default Keyboard;