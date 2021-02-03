const Database = require('arangojs').Database;

const db = new Database();

db.useBasicAuth('root', '');

module.exports = db;