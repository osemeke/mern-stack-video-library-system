const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Oh Hi There!');
});

app.get('/api/todos', (req, res) => {
    res.send(['Mario', 'Zelda', 'Donkey Kong']);
});

app.listen(3000, () => console.log('Listening on port 3000'));