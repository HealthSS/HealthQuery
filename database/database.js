const { Pool } = require('pg');

const pg_uri = 'postgres://iykfwlmg:87mJp0PTZSwWBf9eWLcmh8QwTDPbgL77@drona.db.elephantsql.com:5432/iykfwlmg';

const pool = new Pool({
  connectionString: pg_uri;
})

const queryString = 'CREATE TABLE IF NOT EXISTS cases (id SERIAL PRIMARY KEY, city VARCHAR(255), confirmed INTEGER, deaths INTEGER, recovered INTEGER, active INTEGER)';


module.exports = {
  query: (text, params, callback) => {
    console.log(`Executed query ${text}`);
    return pool.query(text, params, callback)
  }
}