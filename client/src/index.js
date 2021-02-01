import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// webgazer.setGazeListener(function(data, elapsedTime) {
//   if (data == null) {
//       return;
//   }
//   var xprediction = data.x; //these x coordinates are relative to the viewport
//   var yprediction = data.y; //these y coordinates are relative to the viewport
//   console.log(elapsedTime); //elapsed time is based on time since begin was called
// }).begin();

ReactDOM.render(
  <App/>, document.getElementById('app')
);

