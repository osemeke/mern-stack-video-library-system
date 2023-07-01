const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Minimal API! <br />Test with /api/todos');
});

app.get('/api/todos', (req, res) => {
    res.send(['List videos', 'Create bookmarks', 'Play video']);
});

app.listen(3000, () => console.log('Listening on port 3000'));