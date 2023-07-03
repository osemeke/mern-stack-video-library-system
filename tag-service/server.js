const express = require('express');
const app = express();

const db = require('./sqlite/database')

app.get('/', (req, res) => {
    // db.init();
    res.send('Minimal API! <br />Test with /tags');
});

app.get('/tags', (req, res) => {
    var sql = "select * from tags"
    var params = []
    db.connection.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
        }
        res.status(200).json({ rows })
      });
});

app.listen(3001, () => console.log('Listening on port 3001'));