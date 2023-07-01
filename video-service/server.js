const express = require('express');
const app = express();

app.use(express.json())

var clips = [
    { id: 12, name: "System designs", tags:"software design"}
 ];
 
app.get('/clips', async (req, res) => {
    try {
        const result = await clips;
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
 
app.post('/clips', async (req, res) => {
    try {
        clips.push(req.body)
        const result = await clips;
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
 
app.delete('/clips/:id', async (req, res) => {
    try {
        const m = clips.find(x => x.id == req.params.id)
        console.log(m)
        clips.pop(m)
        const result = await clips;
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => console.log('Listening on port 3000'));