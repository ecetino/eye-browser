<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#demo">Demo</a></li>
       <li><a href="#built-with">Built With</a></li>   
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-starting-the-project">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

For this project, I built out a training application for an Google Chrome Extension I plan to create in the future called Eye Browser Chrome. The goal of Eye Browser is to improve accessibility by allowing users to browse the web with their eyes with the help of their webcams and an eye tracking library called WebGazer. 

As a first step toward that goal, I created this training application, Eye Browser, with a series of training modules that allow the user to become accustomed to using eye tracking for cursor movement in a variety of ways. This includes a keyboard module to practice typing on a virtual keyboard with your eyes,  a target module to practice precise cursor movement,  and also a browser module that simulates a webpage and prompts the user to perform actions. Currently, the eye tracking functionality is limited and will show a red dot on the screen which is a prediction of where the user is looking.

These modules were built with a combination of React and Bootstrap and an ArangoDB database was also used to store user logins and performance. Leaderboards were implemented across the modules to encourage continued practice and reward returning users.

Project Link: [https://github.com/ecetino/eye-browser](https://github.com/ecetino/eye-browser)

<!-- DEMO -->
### Demo
Login and Tabs Demo

![til](./EyeBrowserLoginAndTabs.gif)

Keyboard Module Demo

![til](./EyeBrowserKeyboard.gif)

Target Module Demo

![til](./EyBrowserTargets.gif)

Browser Module Demo

![til](./EyeBrowserBrowser.gif)

<!-- Built With -->
### Built With

* [React](https://reactjs.org)
* [Express](http://expressjs.com/)
* [Axios](https://www.npmjs.com/package/axios)
* [Bootstrap](https://getbootstrap.com/)
* [ArangoDB](https://www.arangodb.com/)
* [WebGazer.js](https://webgazer.cs.brown.edu/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running locally please follow these simple steps.

<!-- PREREQUISITES -->
### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* ArangoDB <br/>
  [macOS Installation](https://www.arangodb.com/docs/stable/installation-mac-osx.html)
  <br/>
  [Windows Installation](https://www.arangodb.com/docs/stable/installation-windows.html)
* Requires a working Webcam for eye tracking functionality
  
<!-- INSTALLATION -->
### Installation and starting the project

1. Clone the repo and then cd into the repo
   ```sh
   git clone https://github.com/ecetino/eye-browser.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Seed ArangoDB database
   ```sh
   npm run seed
   ```
4. Build with Webpack
   ```sh
   npm run build
   ```
5. Run with NPM
   ```sh
   npm start
   ```
6. Go to localhost:3000 on your browser and to allow eye tracking functionality allow camera access.
<!-- CONTACT -->
## Contact

<!-- LinkedIn Contact -->
<a href="https://www.linkedin.com/in/ecetino/" target="_blank">
  <img src="https://img.shields.io/badge/-Edgar%20Cetino-blue?style=for-the-badge&logo=Linkedin&logoColor=white"/>
</a>
  
<!--   Email -->
<a href="mailto:cetino-e@hotmail.com">
  <img src="https://img.shields.io/badge/EMAIL-cetino--e%40hotmail.com-1152ba?style=for-the-badge"/>
</a>
