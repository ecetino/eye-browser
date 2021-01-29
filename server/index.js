const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3000;

app.use(express.static('public'));

app.get('/keyboardRecs', async (req, res) => {
  try {
    const queryStr = 'FOR keyboardRec IN keyboardRecords SORT keyboardRec.streak DESC LIMIT 10 RETURN keyboardRec';
    const recs = await db.query(queryStr);
    const response = await recs.all();
    res.send(response);
  } catch (err) {
    console.error(err);
  }
})


app.get('/targetRecs', async (req, res) => {
  try {
    const queryStr = 'FOR targetRec in targetRecords SORT targetRec.time LIMIT 10 RETURN targetRec';
    const recs = await db.query(queryStr);
    const response = await recs.all();
    res.send(response);
  } catch (err) {
    console.error(err);
  }
})

app.get('/browserRecs', async (req, res) => {
  try {
    const queryStr = 'FOR browserRec in browserRecords SORT browserRec.tasksCompleted DESC LIMIT 10 RETURN browserRec';
    const recs = await db.query(queryStr);
    const response = await recs.all();
    res.send(response);
  } catch (err) {
    console.error(err);
  }
})

app.get('/userAuth', async (req, res) => {
  try {
    const queryStr = 'FOR browserRec in browserRecords return browserRec';
    const recs = await db.query(queryStr);
    const response = await recs.all();
    res.send(response);
  } catch (err) {
    console.error(err);
  }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
