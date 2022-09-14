const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Teen tähän psql- tietokannan, rest apilla");
})

app.listen(port, () => {
    console.log(`Serveri on päällä ${port}.`);
});
