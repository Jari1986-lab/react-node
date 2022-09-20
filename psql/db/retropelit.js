const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "retropelit",
    password: "batman86"
})

module.exports = {
    query: (text, params) => pool.query(text, params), 
}