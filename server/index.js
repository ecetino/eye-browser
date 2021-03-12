// database disconnected for demo
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const db = require('../database/index.js');
const port = 3000;

// db.useDatabase('eye-browser');
app.use(bodyParser.json());
app.use(express.static('public'));

// app.get('/keyboardRecs', async (req, res) => {
//   try {
//     const queryStr = 'FOR keyboardRec IN keyboardRecords SORT keyboardRec.streak DESC LIMIT 10 RETURN keyboardRec';
//     const recs = await db.query(queryStr);
//     const response = await recs.all();
//     res.send(response);
//   } catch (err) {
//     console.error(err);
//   }
// })


// app.get('/targetRecs', async (req, res) => {
//   try {
//     const queryStr = 'FOR targetRec in targetRecords SORT targetRec.time LIMIT 10 RETURN targetRec';
//     const recs = await db.query(queryStr);
//     const response = await recs.all();
//     res.send(response);
//   } catch (err) {
//     console.error(err);
//   }
// })

// app.get('/userAuth/:user', async (req, res) => {
//   try {
//     const user = req.params.user;
//     const { password } = req.query;
//     const queryStr = `FOR u in users FILTER u.users == '${user}' RETURN u`;
//     const recs = await db.query(queryStr);
//     const response = await recs.all();
//     if (!response[0]) {
//       res.send(false);
//     } else if (response[0].password !== password) {
//       res.send(false);
//     } else {
//       res.send(true);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// })

// app.post('/addUser', async (req, res) => {
//   try {
//     const { user, password } = req.body;
//     const queryStr = `INSERT { users: '${user}', password: '${password}'} INTO users`;
//     const recs = await db.query(queryStr);
//     res.send(true);
//   } catch (err) {
//     console.error(err);
//     res.send(false);
//   }
// })

// app.post('/addTargetRec', async (req, res) => {
//   try {
//     const { user, time } = req.body;
//     const queryStr = `INSERT { users: '${user}', time: ${time}} INTO targetRecords`;
//     const recs = await db.query(queryStr);
//     res.send(true);
//   } catch (err) {
//     console.error(err);
//     res.send(false);
//   }
// })

// app.post('/addKeyboardRec', async (req, res) => {
//   try {
//     const { user, streak } = req.body;
//     const queryStr = `INSERT { users: '${user}', streak: ${streak} } INTO keyboardRecords`;
//     const recs = await db.query(queryStr);
//     res.send(true);
//   } catch (err) {
//     console.error(err);
//     res.send(false);
//   }
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
