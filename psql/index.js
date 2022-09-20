const db = require('./db/retropelit');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

const GetAllRetropelit = (req, res) => {
    db.query('SELECT * FROM pelit', (err, result) => {
        if (err)
            console.error(err);
        else
            res.json(result.rows)
        })
}

const getRetropelitById = (req, res) => {
const query = {
    text: 'SELECT * FROM pelit WHERE id = $1',
    values: [req.params.id],
}
db.query(query, (err, result) => {
    if (err) {
        return console.error('Error executing query', err.stack)
    }
    else {
        if (result.rows.length > 0)
        res.json(result.rows);
        else
        res.status(404).end();
        }  
    })
}

module.exports = {
    GetAllRetropelit : GetAllRetropelit ,
    getRetropelitById: getRetropelitById,
}




app.listen(port, () => {
    console.log(`Serveri on päällä ${port}.`);
});
