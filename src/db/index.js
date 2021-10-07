const { Pool } = require('pg');
const { user, host, database, port, password } = require('../secrets/db_configuration');

const pool = new Pool({
  user,
  password,
  host,
  database,
  port
});

module.exports = pool;