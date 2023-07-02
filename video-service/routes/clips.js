const express = require("express");
const router = express.Router();
const logger = require('../configs/winston-config');
const clips = require('../data/mocks/clips');
 
router.get('/', async (req, res) => {
    try {
        logger.log("error", "This is an error message");
        const result = await clips;
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
 
router.post('/', async (req, res) => {
    try {
        clips.push(req.body)
        const result = await clips;
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
 
router.delete('/:id', async (req, res) => {
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

module.exports = router;
