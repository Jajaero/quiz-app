// routes/quizSettingsRoutes.js
const express = require('express');
const router = express.Router();
const QuizSettings = require('../models/QuizSettings');

// Create new quiz settings
router.post('/', async (req, res) => {
    try {
        const settings = new QuizSettings(req.body);
        await settings.save();
        res.status(201).send(settings);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all quiz settings
router.get('/', async (req, res) => {
    try {
        const settings = await QuizSettings.find();
        res.status(200).send(settings);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;