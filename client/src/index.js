import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
      return;
  }
  var xprediction = data.x;
  var yprediction = data.y;
  console.log(xprediction, yprediction);
}).begin();

ReactDOM.render(
  <App/>, document.getElementById('app')
);

