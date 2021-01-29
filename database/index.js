const Database = require('arangojs').Database;

const db = new Database();

db.useBasicAuth('root', '');
db.useDatabase('lazy-eye-trainer');

module.exports = db;