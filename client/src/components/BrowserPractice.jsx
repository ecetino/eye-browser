import React from 'react';

class BrowserPractice extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <button onClick={() => {this.props.setPage('Home')}}>Home</button>
      </div>
    )
  }
}

export default BrowserPractice;