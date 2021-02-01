const db = require('../database/index.js');

db.createDatabase('lazy-eye-trainer')
  .then(() => {
    console.log('db created');
  })
  .catch((err) => {
    console.error('err when creating db: ', err)
  });

db.useDatabase('lazy-eye-trainer');

const usersCol = db.collection('users');

usersCol.create()
  .then(() => {
    console.log('usersCol created');
  })
  .catch((err) => {
    console.error('err when creating usersCol: ', err)
  });

const keyboardRecordsCol = db.collection('keyboardRecords');

keyboardRecordsCol.create()
  .then(() => {
    console.log('keyboardRecordsCol created');
  })
  .catch((err) => {
    console.error('err when creating keyboardRecordsCol: ', err)
  });

const targetRecordsCol = db.collection('targetRecords');

targetRecordsCol.create()
  .then(() => {
    console.log('targetRecordsCol created');
  })
  .catch((err) => {
    console.error('err when creating targetRecordsCol: ', err)
  });

const browserRecordsCol = db.collection('browserRecords');

browserRecordsCol.create()
  .then(() => {
    console.log('browserRecordsCol created');
  })
  .catch((err) => {
    console.error('err when creating browserRecordsCol: ', err)
  });

const users = ['tom', 'sammyG', 'slayer67', 'orange', 'fireRed', 'theWiz', 'susanahBanana', 'nathanV', 'fernTheFern', 'kaido'];

const sampleUserRecords = [];
const sampleKeyboardRecords = [];
const sampleTargetRecords = [];
const sampleBrowserRecords = [];

for (i = 0; i < 10; i++) {
  sampleUserRecords.push({ users: users[i], password: 'password'});
  sampleKeyboardRecords.push({ users: users[i], streak: Math.ceil(Math.random() * 7 )});
  sampleTargetRecords.push({ users: users[i], time: Math.random()* 15});
  sampleBrowserRecords.push({ users: users[i], tasksCompleted: Math.ceil(Math.random() * 6)});
};

usersCol.import(sampleUserRecords)
  .then((result) => {
    console.log('import users complete:', result);
  })
  .catch((err) => {
    console.log('import users failed:', err);
  })

keyboardRecordsCol.import(sampleKeyboardRecords)
  .then((result) => {
    console.log('import keyboard complete:', result);
  })
  .catch((err) => {
    console.log('import keyboard failed:', err);
  })

targetRecordsCol.import(sampleTargetRecords)
  .then((result) => {
    console.log('import target complete:', result);
  })
  .catch((err) => {
    console.log('import target failed:', err);
  })

browserRecordsCol.import(sampleBrowserRecords)
  .then((result) => {
    console.log('import browser complete:', result);
  })
  .catch((err) => {
    console.log('import browser failed:', err);
  })