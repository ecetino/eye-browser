import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
      return;
  }
  // Commented out for Demo
  // var xprediction = data.x;
  // var yprediction = data.y;
}).begin();

ReactDOM.render(
  <App/>, document.getElementById('app')
);

