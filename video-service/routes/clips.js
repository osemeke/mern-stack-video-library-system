const dotenv = require("dotenv").config();
const express = require("express");
const router = express.Router();
const logger = require('../configs/winston-config');
// const clips = require('../data/mocks/clips');
const db = require('../data/mocks/mongodb/connection');
const Clip = require('../data/mocks/mongodb/clip');

// get all
router.get('/', async (req, res) => {
    try {
        const result = await Clip.find();
        res.status(200).json(result) // use .json as .send is mainly for string
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// add
router.post('/', async (req, res) => {
    const data = new Clip({
        name: req.body.name,
        tags: req.body.tags
    })
    try {
        const saved = await data.save();
        res.status(201).json(saved) // 201 mores specific than 200
    }
    catch (error) {
        res.status(400).json({ message: error.message })
        logger.log("error", error.message);
    }
});

// get
router.get('/:id', async (req, res) => {
    try {
        const result = await Clip.findById(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// update
router.patch('/:id', async (req, res) => { // patch to update a single or some field
    try {
        const id = req.params.id;
        const body = req.body;
        const options = { new: true };
        const result = await Clip.findByIdAndUpdate(
            id, body, options
        )
        res.status(200).json(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Clip.findByIdAndDelete(id)
        logger.log("info", `document ${data.name} has been deleted`);
        res.json({ message: `document ${data.name} has been deleted` })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
