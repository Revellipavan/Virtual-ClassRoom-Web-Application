const express = require('express');
const router = express.Router();
const { Class } = require('../models');

// Create Class
router.post('/', async (req, res) => {
    const { title, description, instructorId } = req.body;

    try {
        const newClass = await Class.create({
            title,
            description,
            instructorId
        });
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ error: 'Error creating class' });
    }
});

// Get All Classes
router.get('/', async (req, res) => {
    const classes = await Class.findAll();
    res.json(classes);
});

module.exports = router;
